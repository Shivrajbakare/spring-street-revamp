import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, Clock, Landmark } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  // Booking scheduler state
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && query) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setEmail('');
        setQuery('');
      }, 5000);
    }
  };

  const handleBookSlot = () => {
    if (selectedDay && selectedTime) {
      setBookingConfirmed(true);
      setTimeout(() => {
        setBookingConfirmed(false);
        setSelectedTime('');
      }, 6000);
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-left mb-16">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Connect With Spring Street</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Need assistance with GIFT City accounts, LRS remittances, or finding the right Prisma strategy? Speak directly to our advisory desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Form & Address */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Query Form */}
          <div className="glass-panel p-8 rounded-xl text-left">
            <h3 className="text-lg font-bold text-white mb-6">Send an Inquiry</h3>
            
            {formSubmitted ? (
              <div className="bg-brand-success/15 border border-brand-success/30 p-6 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    Thank you. A relationship manager from our LRS Desk will contact you at <strong>{email}</strong> within 12 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amit Sharma"
                      className="w-full bg-slate-950/60 border border-white/10 focus:border-brand-accent/50 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. amit@gmail.com"
                      className="w-full bg-slate-950/60 border border-white/10 focus:border-brand-accent/50 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Message / Inquiry Details</label>
                  <textarea
                    rows={4}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your requirements (minimum investments, corporate portfolios, LRS queries)"
                    className="w-full bg-slate-950/60 border border-white/10 focus:border-brand-accent/50 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-xs rounded transition-all"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="glass-panel p-6 rounded-lg">
              <Mail className="w-5 h-5 text-brand-accent mb-4" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Email</h4>
              <a href="mailto:contact@springstreet.in" className="text-xs text-slate-400 hover:text-brand-accent transition-colors">
                contact@springstreet.in
              </a>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <Phone className="w-5 h-5 text-brand-accent mb-4" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Desk Phone</h4>
              <p className="text-xs text-slate-400">+91 22 6834 8922</p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <MapPin className="w-5 h-5 text-brand-accent mb-4" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Mumbai Office</h4>
              <p className="text-[10px] text-slate-400 leading-tight">VIOS Tower, Wadala, Mumbai 400037</p>
            </div>
          </div>

        </div>

        {/* Right Column: Live Booking Slot Calendar */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-8 rounded-xl text-left flex flex-col justify-between h-full relative overflow-hidden">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-brand-accent" />
                <h3 className="text-lg font-bold text-white">Book virtual consultation</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Schedule a 1-on-1 Google Meet video call with an analyst to review your portfolio strategy.
              </p>

              {bookingConfirmed ? (
                <div className="bg-brand-success/10 border border-brand-success/30 p-6 rounded-lg space-y-4 mb-4">
                  <div className="flex items-center gap-2 text-brand-success">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold">Booking Scheduled!</span>
                  </div>
                  <div className="space-y-1 font-mono text-[10px] text-slate-300">
                    <div>📅 Date: Next {selectedDay}</div>
                    <div>⏰ Time Slot: {selectedTime}</div>
                    <div>🔗 Format: Google Meet Invitation sent</div>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    An email calendar invite has been sent. You can reschedule or cancel at any time via the link in the invite.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Select Day */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Select Day</span>
                    <div className="flex flex-wrap gap-2">
                      {days.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`px-3 py-1.5 rounded text-[10px] font-semibold transition-all ${
                            selectedDay === day
                              ? 'bg-brand-accent/20 border border-brand-accent text-brand-accent'
                              : 'bg-slate-950 border border-white/5 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Select Time Slot (IST)</span>
                    <div className="grid grid-cols-2 gap-2">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-mono font-semibold border transition-all ${
                            selectedTime === time
                              ? 'bg-brand-primary border-brand-primary text-white'
                              : 'border-white/5 hover:border-white/20 text-slate-300'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>{time}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBookSlot}
                    disabled={!selectedTime}
                    className={`w-full text-center py-3 rounded font-semibold text-xs transition-all ${
                      selectedTime 
                        ? 'bg-brand-primary text-white hover:bg-brand-primary/95 shadow-md shadow-brand-primary/20'
                        : 'bg-slate-900 border border-white/5 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>

            <div className="bg-slate-950/60 border border-white/5 p-4 rounded-lg flex items-start gap-2.5 mt-8">
              <Landmark className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
              <span className="text-[10px] text-slate-400 leading-normal">
                Spring Street is regulated as an Investment Advisory gatekeeper. We do not charge custody or exit commissions.
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
