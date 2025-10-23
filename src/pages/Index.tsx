import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [url, setUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!url) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#0F172A] opacity-90"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Icon name="Sparkles" size={20} className="text-[#6366F1]" />
            <span className="text-sm font-medium">AI-Powered Video Generation</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            VIDEO GENERATION
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            تحويل القصص إلى مقاطع فيديو احترافية بنقرة واحدة
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl animate-glow">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-purple-200">رابط القصة</label>
                <Input
                  type="url"
                  placeholder="https://stories.amwaly.com/blog/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-300/50 text-lg h-14 rounded-2xl focus:ring-2 focus:ring-[#6366F1] transition-all"
                />
              </div>
              
              <Button
                onClick={handleGenerate}
                disabled={!url || isGenerating}
                className="h-14 text-lg font-semibold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6366F1] rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-3">
                    <Icon name="Loader2" size={24} className="animate-spin" />
                    <span>جاري الإنشاء...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Icon name="Video" size={24} />
                    <span>إنشاء الفيديو</span>
                  </div>
                )}
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: 'Video', label: 'توليد فيديو' },
              { icon: 'Link', label: 'من الرابط' },
              { icon: 'Cpu', label: 'معالجة AI' },
              { icon: 'Zap', label: 'سريع جداً' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all animate-fade-in hover:scale-105"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                  <Icon name={feature.icon as any} size={28} />
                </div>
                <span className="text-sm font-medium text-purple-200">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-4xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/10">
            <h2 className="text-3xl font-bold mb-8 text-center">تواصل معنا</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                    <p className="text-purple-200 text-sm">info@videoai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">الدعم الفني</h3>
                    <p className="text-purple-200 text-sm">support@videoai.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">الموقع الإلكتروني</h3>
                    <p className="text-purple-200 text-sm">www.videoai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ساعات العمل</h3>
                    <p className="text-purple-200 text-sm">متاح على مدار الساعة</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-purple-200">© 2024 Video AI Platform. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;