import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  RotateCcw, 
  Languages, 
  Sparkles, 
  ChevronRight,
  User,
  MessageSquare
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  BOT_INITIAL_PROMPT, 
  BOT_WELCOME_MESSAGES, 
  FAQ_TOPICS, 
  findBotResponse 
} from '../data/botKnowledge';

/**
 * Format markdown bold **text** and bullet lines cleanly in chat bubbles
 */
function formatBotMessage(text) {
  if (!text) return null;
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Parse **bold** markdown segments
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const formattedLine = parts.map((part, partIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={partIdx} className="font-bold text-[#0B2B22]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    return (
      <React.Fragment key={lineIdx}>
        {lineIdx > 0 && <span className="block h-1.5" />}
        <span>{formattedLine}</span>
      </React.Fragment>
    );
  });
}

// Key curated FAQ topics to showcase as quick chips
const TOPIC_CHIP_IDS = [
  'products',
  'food_packaging',
  'calendar_covers',
  'pouches',
  'printing',
  'materials',
  'pricing',
  'moq',
  'order_process',
  'samples',
  'delivery',
  'location',
  'contact'
];

export default function AIBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null); // 'en' | 'ta' | null (must select first)
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageCounterRef = useRef(1);
  const getNextId = () => `msg-${messageCounterRef.current++}`;

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, selectedLang]);

  // When user selects language (Step 1 requirement)
  const handleSelectLanguage = (langCode) => {
    setSelectedLang(langCode);
    const welcomeText = BOT_WELCOME_MESSAGES[langCode];
    
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: welcomeText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showChips: true
      }
    ]);
  };

  // Reset conversation back to language selection
  const handleReset = () => {
    setSelectedLang(null);
    setMessages([]);
    setInputValue('');
  };

  // Switch language directly while in chat
  const handleSwitchLanguage = () => {
    const nextLang = selectedLang === 'ta' ? 'en' : 'ta';
    setSelectedLang(nextLang);
    setMessages(prev => [
      ...prev,
      {
        id: getNextId(),
        sender: 'bot',
        text: nextLang === 'ta' 
          ? 'மொழி தமிழுக்கு மாற்றப்பட்டது. உங்களுக்கு எவ்வாறு உதவ முடியும்?' 
          : 'Language switched to English. How can I assist you?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showChips: true
      }
    ]);
  };

  // Send message and get AI response
  const handleSendMessage = (textToSend = null, explicitTopicId = null) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage = {
      id: getNextId(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Natural brief delay for conversational response
    setTimeout(() => {
      let botText = '';
      let hasWhatsAppCTA = true;

      if (explicitTopicId) {
        const topic = FAQ_TOPICS.find(t => t.id === explicitTopicId);
        if (topic) {
          botText = (selectedLang === 'ta') ? topic.responseTa : topic.responseEn;
        }
      }

      if (!botText) {
        const match = findBotResponse(query, selectedLang || 'en');
        botText = match.text;
        hasWhatsAppCTA = match.hasWhatsAppCTA;
      }

      const botMessage = {
        id: getNextId(),
        sender: 'bot',
        text: botText,
        hasWhatsAppCTA,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showChips: true
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const activeChips = FAQ_TOPICS.filter(t => TOPIC_CHIP_IDS.includes(t.id));

  return (
    <>
      {/* Floating AI Bot Launcher Trigger */}
      <div className="fixed bottom-24 right-6 z-40 select-none font-sans">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Surya Poly Pack AI Assistant"
          aria-expanded={isOpen}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0B2B22] via-[#102F26] to-[#071E18] text-[#FAF8F2] shadow-xl shadow-[#0B2B22]/35 border-2 border-[#C99A42] hover:border-[#DBAE56] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer relative group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#FAF8F2]" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-[#C99A42] group-hover:rotate-6 transition-transform" />
              
              {/* Pulsing AI Activity Sparkle */}
              <span className="absolute -top-1 -left-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99A42] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C99A42] items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-[#0B2B22]" />
                </span>
              </span>

              {/* Bot Label Tag */}
              <span className="absolute -bottom-1 px-1.5 py-0.2 rounded-md bg-[#C99A42] text-[#0B2B22] text-[9px] font-black uppercase tracking-wider">
                AI
              </span>
            </>
          )}

          {/* Desktop Hover Tooltip */}
          {!isOpen && (
            <span className="absolute right-16 bg-[#0B2B22] border border-[#C99A42]/50 text-[#FAF8F2] text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A42]" />
              <span>Surya AI • Ask Questions</span>
            </span>
          )}
        </button>
      </div>

      {/* Main AI Chatbot Window */}
      {isOpen && (
        <aside 
          aria-label="Surya Poly Pack AI Chat Assistant"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#FAF8F2] border border-[#E4DED1] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 font-sans"
        >
          {/* Header Bar */}
          <div className="bg-[#0B2B22] text-[#FAF8F2] p-3.5 sm:p-4 flex items-center justify-between border-b border-[#C99A42]/30 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#102F26] to-[#0B2B22] border border-[#C99A42]/50 flex items-center justify-center text-[#C99A42] shadow-inner">
                  <Bot className="w-6 h-6" />
                </div>
                {/* Online status indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#0B2B22]"></span>
              </div>
              
              <div>
                <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                  <span>{selectedLang === 'ta' ? BOT_INITIAL_PROMPT.titleTa : BOT_INITIAL_PROMPT.title}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#C99A42]/20 text-[#DBAE56] font-bold border border-[#C99A42]/30">24/7</span>
                </h3>
                <p className="text-[11px] text-[#FAF8F2]/70 leading-none mt-0.5">
                  {selectedLang === 'ta' ? BOT_INITIAL_PROMPT.subtitleTa : BOT_INITIAL_PROMPT.subtitle}
                </p>
              </div>
            </div>

            {/* Header Action Controls */}
            <div className="flex items-center gap-1">
              {selectedLang && (
                <button
                  type="button"
                  onClick={handleSwitchLanguage}
                  className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF8F2] text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                  title="Switch Language"
                >
                  <Languages className="w-3.5 h-3.5 text-[#C99A42]" />
                  <span>{selectedLang === 'ta' ? 'English' : 'தமிழ்'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
                title="Restart Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {/* STEP 1: Language Selection First (if not yet chosen) */}
            {!selectedLang && (
              <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                <div className="p-4 rounded-2xl bg-white border border-[#E4DED1] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2B22] font-bold">
                    <Sparkles className="w-4 h-4 text-[#C99A42]" />
                    <span>Welcome to Surya Poly Pack!</span>
                  </div>
                  <p className="text-[#58615B] leading-relaxed">
                    {BOT_INITIAL_PROMPT.languagePromptEn}
                  </p>
                  <p className="text-[#58615B] leading-relaxed pt-1 border-t border-[#E4DED1]/60">
                    {BOT_INITIAL_PROMPT.languagePromptTa}
                  </p>
                </div>

                {/* Big Choice Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleSelectLanguage('en')}
                    className="p-4 rounded-2xl bg-white hover:bg-[#F1EBDD] border-2 border-[#E4DED1] hover:border-[#0B2B22] transition-all text-left group shadow-xs cursor-pointer flex flex-col justify-between h-28"
                  >
                    <div>
                      <div className="text-xl mb-1">🇬🇧</div>
                      <div className="text-sm font-extrabold text-[#0B2B22] group-hover:text-[#0B2B22]">
                        English
                      </div>
                    </div>
                    <span className="text-[10px] text-[#58615B] font-semibold flex items-center justify-between">
                      <span>Chat in English</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C99A42] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectLanguage('ta')}
                    className="p-4 rounded-2xl bg-white hover:bg-[#F1EBDD] border-2 border-[#E4DED1] hover:border-[#0B2B22] transition-all text-left group shadow-xs cursor-pointer flex flex-col justify-between h-28"
                  >
                    <div>
                      <div className="text-xl mb-1">🇮🇳</div>
                      <div className="text-sm font-extrabold text-[#0B2B22] group-hover:text-[#0B2B22]">
                        தமிழ் (Tamil)
                      </div>
                    </div>
                    <span className="text-[10px] text-[#58615B] font-semibold flex items-center justify-between">
                      <span>தமிழில் உரையாட</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C99A42] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Conversation Messages */}
            {selectedLang && messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'items-start' : 'items-end justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-xl bg-[#0B2B22] text-[#C99A42] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[88%] space-y-1.5 ${isBot ? 'items-start' : 'items-end'}`}>
                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed ${
                        isBot
                          ? 'bg-white text-[#27312D] border border-[#E4DED1] shadow-xs rounded-tl-sm'
                          : 'bg-[#0B2B22] text-[#FAF8F2] shadow-sm rounded-tr-sm whitespace-pre-wrap'
                      }`}
                    >
                      {isBot ? formatBotMessage(msg.text) : msg.text}
                    </div>

                    {/* Dual WhatsApp CTA Action Buttons inside bot replies */}
                    {isBot && msg.hasWhatsAppCTA && (
                      <div className="p-2.5 rounded-xl bg-white border border-[#E4DED1] space-y-1.5 shadow-2xs">
                        <div className="text-[10px] font-bold text-[#58615B] uppercase tracking-wider">
                          {selectedLang === 'ta' ? 'வாட்ஸ்அப் உடனடி உதவி:' : 'Connect on WhatsApp:'}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          <a
                            href={getWhatsAppUrl(null, selectedLang, COMPANY_INFO.phone.primaryRaw)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] shadow-xs transition"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5 text-white fill-white" />
                            <span className="truncate">{COMPANY_INFO.phone.primary}</span>
                          </a>
                          <a
                            href={getWhatsAppUrl(null, selectedLang, COMPANY_INFO.phone.secondaryRaw)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] shadow-xs transition"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5 text-white fill-white" />
                            <span className="truncate">{COMPANY_INFO.phone.secondary}</span>
                          </a>
                        </div>
                      </div>
                    )}

                    <div className={`text-[9px] text-[#58615B]/70 px-1 ${isBot ? 'text-left' : 'text-right'}`}>
                      {msg.time}
                    </div>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-xl bg-[#C99A42] text-[#0B2B22] flex items-center justify-center shrink-0 mb-4 shadow-2xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#0B2B22] text-[#C99A42] flex items-center justify-center shrink-0 shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl bg-white border border-[#E4DED1] shadow-xs rounded-tl-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C99A42] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#C99A42] animate-bounce [animation-delay:0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#C99A42] animate-bounce [animation-delay:0.3s]"></span>
                </div>
              </div>
            )}

            {/* Quick Topic Chips (Suggested Questions) */}
            {selectedLang && !isTyping && (
              <div className="pt-2">
                <div className="text-[10px] font-bold text-[#58615B] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-[#C99A42]" />
                  <span>{selectedLang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்:' : 'Suggested Questions:'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {activeChips.map((topic) => {
                    const label = selectedLang === 'ta' ? topic.chipTa : topic.chipEn;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleSendMessage(label, topic.id)}
                        className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F1EBDD] text-[#0B2B22] border border-[#E4DED1] hover:border-[#0B2B22]/30 font-semibold text-[11px] transition shadow-2xs cursor-pointer text-left shrink-0"
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Bar (enabled only after language selection) */}
          {selectedLang ? (
            <div className="p-3 bg-white border-t border-[#E4DED1] shrink-0">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    selectedLang === 'ta' 
                      ? 'உங்கள் கேள்வியை இங்கே தட்டச்சு செய்க...' 
                      : 'Ask about packaging, quotes, flexo printing...'
                  }
                  className="flex-1 px-3.5 py-2.5 bg-[#FAF8F2] border border-[#E4DED1] rounded-xl text-xs text-[#27312D] placeholder-[#58615B] focus:outline-hidden focus:border-[#0B2B22] focus:ring-1 focus:ring-[#0B2B22] transition"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2.5 rounded-xl bg-[#0B2B22] hover:bg-[#102F26] text-[#FAF8F2] disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer shrink-0 shadow-xs"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-[#C99A42]" />
                </button>
              </form>
              <div className="text-[10px] text-[#58615B] text-center pt-1.5 flex items-center justify-center gap-2">
                <span>Surya Poly Pack Sivakasi</span>
                <span>•</span>
                <span>English & தமிழ்</span>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-white border-t border-[#E4DED1] text-center text-xs text-[#58615B] font-medium shrink-0">
              👆 Select language above to start chatting
            </div>
          )}
        </aside>
      )}
    </>
  );
}
