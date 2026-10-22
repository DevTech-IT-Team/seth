import { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Welcome to Culinary Provision Group. Are you planning a new restaurant launch, looking to optimize an existing operation, or exploring our hospitality learning programs?", 
      side: 'ai' 
    }
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const processAIResponse = (query) => {
    const q = query.toLowerCase();
    let response = "Culinary Provision Group specializes in restaurant launches (CPG Opening Doors), operational tune-ups, backstage systems, and professional culinary learning. Would you like to start a consultation or explore a specific service?";
    
    if (q.includes('launch') || q.includes('opening') || q.includes('open a restaurant') || q.includes('new')) {
      response = "Our flagship service, CPG Opening Doors, guides you from concept validation and kitchen architecture to staffing, SOPs, and opening day. You can submit an inquiry through our 'Start Your Journey' form to discuss your timeline.";
    } else if (q.includes('tune') || q.includes('profit') || q.includes('labor') || q.includes('cost') || q.includes('fix')) {
      response = "Restaurant Tune-Up is designed for active operators experiencing margin friction, workflow bottlenecks, or staffing misalignment. We perform a structured 360-degree audit to stabilize operations.";
    } else if (q.includes('backstage') || q.includes('sop') || q.includes('back office') || q.includes('inventory')) {
      response = "CPG Backstage installs robust back-office workflows, inventory controls, costing sheets, and team operating manuals so consistency is built into daily operations.";
    } else if (q.includes('kitchen') || q.includes('learn') || q.includes('training') || q.includes('course') || q.includes('lab')) {
      response = "We offer CPG Kitchen (kitchen economics and culinary standards) and CPG Hospitality Lab (intelligent systems and workflows). Both provide practical, operational learning.";
    } else if (q.includes('creator') || q.includes('share') || q.includes('expert') || q.includes('partner')) {
      response = "Hospitality Creators is our collaborative network connecting seasoned culinary leaders, chefs, and beverage directors to share blueprints and mentor new ventures.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, side: 'ai' }]);
    }, 500);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input.trim(), side: 'user' }]);
      processAIResponse(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-burgundy text-white flex items-center justify-center cursor-pointer shadow-warm-lg border border-gold/40 z-40 transition-all duration-300 hover:scale-105 hover:bg-rose active:scale-95 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open CPG Advisory Assistant"
      >
        <MessageSquare className="w-6 h-6 text-champagne" />
      </button>

      <div 
        className={`fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-champagne shadow-warm-lg z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-burgundy text-white p-4 flex justify-between items-center border-b border-gold/30">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose animate-pulse" />
            <div>
              <span className="font-headline font-semibold text-sm tracking-wide block">CPG Advisory Guide</span>
              <span className="text-[10px] text-champagne/70 font-light uppercase tracking-wider">Hospitality Operations</span>
            </div>
          </div>
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Body */}
        <div ref={chatBodyRef} className="h-[320px] overflow-y-auto p-4 flex flex-col gap-3 bg-cream/30">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`p-3.5 text-xs leading-relaxed max-w-[85%] rounded-2xl shadow-warm-sm ${
                m.side === 'ai' 
                  ? 'bg-white text-espresso border border-champagne self-start rounded-tl-sm' 
                  : 'bg-rose text-white self-end rounded-tr-sm'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-champagne flex items-center gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about launching or services..."
            className="flex-1 text-xs text-espresso placeholder:text-muted bg-cream/50 px-3.5 py-2.5 rounded-xl border border-champagne/80 outline-none focus:border-rose transition-all"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-rose text-white hover:bg-[#9b3b55] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChat;
