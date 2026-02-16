import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '../../context/toast/UseToast';
import GlitchText from '../ui/GlitchText/GlitchText';
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';
import { LuGithub, LuMail, LuSend } from 'react-icons/lu';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactGuild = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lastMessageHash, setLastMessageHash] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
    }

    const currentMessageHash =
      `${formData.name}-${formData.message}`.toLowerCase();

    if (currentMessageHash === lastMessageHash) {
      showToast('Transmission rejected: Duplicate message detected.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showToast(
        'Message successfully uplinked to the guild network.',
        'success'
      );
      setLastMessageHash(currentMessageHash);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      showToast(
        'System Malfunction: Transmission failed. Please try again.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative bg-cyber-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Main container */}
      <div className="relative z-10 max-w-360 mx-auto animate-fade-in">
        {/* Title */}
        <GlitchText>
          <h2 className="text-center text-3xl md:text-5xl font-orbitron font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] uppercase tracking-wide mb-4">
            Contact Guild
          </h2>
        </GlitchText>

        <div className="text-center mb-12">
          <p className="text-text-secondary font-mono font-medium text-sm md:text-base tracking-widest uppercase">
            Send a message to join my party
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card
              glow="purple"
              className="bg-cyber-surface/80 backdrop-blur-md h-full"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-orbitron font-bold text-xl text-neon-purple tracking-wide mb-6 pb-4">
                  Send Message
                </h3>

                {/* Name input */}
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Player Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-bg/50 border-2 border-text-secondary/30 rounded-lg text-text-primary font-mono text-lg focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 placeholder:text-text-secondary/30"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting ? true : false}
                    autoComplete="off"
                  />
                </div>

                {/* Email input */}
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cyber-bg/50 border-2 border-text-secondary/30 rounded-lg text-text-primary font-mono text-lg focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 placeholder:text-text-secondary/30"
                    placeholder="your.email@gmail.com"
                    required
                    disabled={isSubmitting ? true : false}
                    autoComplete="off"
                  />
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-bg/50 border-2 border-text-secondary/30 rounded-lg text-text-primary font-mono text-lg focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 placeholder:text-text-secondary/30"
                    placeholder="Type your message here..."
                    required
                    disabled={isSubmitting ? true : false}
                    autoComplete="off"
                  />
                </div>

                {/* Submit button */}
                <Button
                  variant="purple"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                  glow={false}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <span className="animate-pulse">Uplinking...</span>
                    ) : (
                      <>
                        <LuSend size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </Card>
          </div>

          {/* Social links & info */}
          <div className="space-y-6">
            <Card glow="cyan" className="bg-cyber-surface/80 backdrop-blur-md">
              <h3 className="font-orbitron font-bold text-xl text-neon-cyan tracking-wide mb-6 pb-4">
                Quick Connect
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:kuomy105@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Button variant="cyan" fullWidth glow={false}>
                    <div className="flex items-center justify-center gap-2">
                      <LuMail size={18} />
                      <span>Email</span>
                    </div>
                  </Button>
                </a>

                <a
                  href="https://github.com/SomebodyKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Button variant="purple" fullWidth glow={false}>
                    <div className="flex items-center justify-center gap-2">
                      <LuGithub size={18} />
                      <span>GitHub</span>
                    </div>
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/man-yu-kuo-a025a1361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Button variant="cyan" fullWidth glow={false}>
                    <div className="flex items-center justify-center gap-2">
                      <LuMail size={18} />
                      <span>LinkedIn</span>
                    </div>
                  </Button>
                </a>
              </div>
            </Card>

            <Card glow="gold" className="bg-cyber-surface/80 backdrop-blur-md">
              <div className="text-center space-y-4">
                <div className="inline-block px-4 py-1 bg-green-500/10 border border-green-500/50 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="font-mono text-green-400 text-xs font-bold tracking-widest uppercase">
                      Available
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm font-rajdhani leading-relaxed">
                  Currently seeking new quests and co-op opportunities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGuild;
