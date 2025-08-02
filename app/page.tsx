import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Stethoscope,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpeakerCard from "@/components/SpeakerCard";
import ScheduleButton from "@/components/ScheduleButton";

type Speaker = {
  id: number;
  nome: string;
  especialidade: string;
  bio: string;
  imagem: string;
  credenciais: string;
  alias: string;
};

type ScheduleItemType = "reception" | "presentation" | "break" | "closing";

type ScheduleItem = {
  type: ScheduleItemType;
  title: string;
  time: string;
  description: string;
  speakers?: number[];
};

type Stat = {
  value: string;
  label: string;
};

type SocialLinkType = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
};

type FooterLink = {
  text: string;
  href: string;
};

// Data constants
const SPEAKERS_DATA: Speaker[] = [
  {
    id: 1,
    nome: "Prof. Tiago Cadidé",
    especialidade: "Implantodontia e Harmonização Facial",
    bio: "Mestre e doutorando em Implantodontia. Possui 18 anos coordenando cursos de especialização na área. Atualmente, é coordenador dos cursos de Especialização em Implantodontia do CTA em Salvador, Feira de Santana e Aracaju.",
    imagem: "/Doutores/DrTiagoCadidé.jpg",
    credenciais: "Mestre • Doutorando • 18 anos de experiência",
    alias: "TC",
  },
  {
    id: 2,
    nome: "Dra. Daniela Barbosa",
    especialidade: "Implantodontia e Prótese Dentária",
    bio: "Formada pela Escola Bahiana de Medicina e Saúde Pública. Especialista em Implantodontia e Prótese Dentária pela CTA Academy São Paulo. Também é especialista em Cirurgia Bucal pelo Instituto Prime.",
    imagem: "/Doutores/DanielaBarbosa.jpeg",
    credenciais: "CTA Academy • Instituto Prime",
    alias: "DB",
  },
  {
    id: 3,
    nome: "Dr. Fábio Barbosa",
    especialidade: "Cirurgias Avançadas e Estética Periodontal",
    bio: "Mestre em Implantes Dentários pela São Leopoldo Mandic. Pós-graduado em Cirurgias Avançadas pelo M.A.R.C Miami. CEO do Instituto Odontomédico e proprietário da Zircolab.",
    imagem: "/Doutores/Fabio.webp",
    credenciais: "UFBA • São Leopoldo Mandic • M.A.R.C Miami",
    alias: "FB",
  },
  {
    id: 4,
    nome: "Dr. Leonardo Barreto",
    especialidade: "Prótese Dentária e Laminados Cerâmicos",
    bio: "Graduado em Odontologia pela UNESP – São José dos Campos (SP).\nAtualização em Implantodontia pela USP – São Paulo.\nEspecialista em Implantodontia pela UNESP – São José dos Campos.\nMestre em Periodontia pela São Leopoldo Mandic – Campinas (SP).",
    imagem: "/Doutores/LeonardoBarreto.jpeg",
    credenciais: "Mestre em Prótese • Estética Digital",
    alias: "LB",
  },
  {
    id: 5,
    nome: "Dr. Lucas Cunha",
    especialidade: "Tecnologias em Implantodontia",
    bio: "Especialista, mestre e doutor em Implantodontia. Pesquisador em novas tecnologias aplicadas à implantodontia. Professor universitário.",
    imagem: "/placeholder.svg?height=200&width=200&text=Dr.+Lucas+Cunha",
    credenciais: "Mestre • Doutor • Professor",
    alias: "LC",
  },
  {
    id: 6,
    nome: "Dra. Ana Julia Melo",
    especialidade: "Tecnologias em Implantodontia e Prótese Dentária",
    bio: "Especialista, mestre e doutora em Implantodontia. Pesquisadora em novas tecnologias aplicadas à implantodontia. Professora universitária.\nGraduada em Odontologia pela Universidade Estadual do Norte do Paraná (UENP).\nEspecialista em Prótese Dentária pelo Instituto Ária – Brasília.\nEspecializada em Implantodontia pela Innovare – Salvador.\nAtualização em Lentes de Contato Dentais com Dr. Eduardo Rocha.",
    imagem: "/Doutores/AnaJuliaMelo.JPG",
    credenciais: "Mestre • Doutora • Professora",
    alias: "AJ",
  },
];

const SCHEDULE_DATA: Record<"morning" | "afternoon", ScheduleItem[]> = {
  morning: [
    {
      type: "reception",
      title: "Entrega de Crachás + Recepção Congressistas",
      time: "08:00",
      description: "Credenciamento e boas-vindas aos participantes",
    },
    {
      type: "presentation",
      title: "Cirurgia Guiada",
      time: "08:30 - 09:20",
      description: "Técnicas avançadas em cirurgia guiada por computador",
      speakers: [1],
    },
    {
      type: "presentation",
      title: "Fluxo Digital + QSV - Escaneamento Digital",
      time: "09:30 - 10:20",
      description: "Workflow digital completo e escaneamento intraoral",
      speakers: [3, 2],
    },
    {
      type: "break",
      title: "Coffee Break",
      time: "10:30 - 11:00",
      description: "Pausa para networking e refreshments",
    },
    {
      type: "presentation",
      title: "Etapas Laboratoriais",
      time: "11:00 - 12:00",
      description: "Processos laboratoriais em odontologia digital",
      speakers: [3],
    },
  ],
  afternoon: [
    {
      type: "presentation",
      title: "Instalação de próteses - QSV",
      time: "14:00 - 14:50",
      description: "Protocolo de instalação de próteses sobre implantes",
      speakers: [3, 2],
    },
    {
      type: "presentation",
      title: "Laminados Cerâmicos & Fluxo Digital",
      time: "15:00 - 16:00",
      description: "Estética dental com laminados cerâmicos digitais",
      speakers: [4],
    },
    {
      type: "break",
      title: "Coffee Break",
      time: "16:00 - 16:30",
      description: "Segunda pausa para networking",
    },
    {
      type: "presentation",
      title: "Tecnologias em Implantodontia",
      time: "17:00 - 18:00",
      description: "Inovações e tendências futuras em implantodontia",
      speakers: [5],
    },
    {
      type: "closing",
      title: "Encerramento & Sorteio",
      time: "18:00 - 19:00",
      description: "Considerações finais e sorteio de brindes",
    },
  ],
};

const STATS_DATA: Stat[] = [
  { value: "500+", label: "Participantes" },
  { value: "12", label: "Palestrantes" },
  { value: "8h", label: "De conteúdo" },
  { value: "100%", label: "Digital" },
];

const SOCIAL_LINKS: SocialLinkType[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const FOOTER_LINKS: FooterLink[] = [
  { text: "Sobre", href: "#" },
  { text: "Palestrantes", href: "#" },
  { text: "Programação", href: "#" },
  { text: "Local", href: "#" },
  { text: "Patrocinadores", href: "#" },
];

// Utility functions
const getSpeakerById = (id: number): Speaker | undefined =>
  SPEAKERS_DATA.find((speaker) => speaker.id === id);

const getScheduleItemBorderColor = (type: ScheduleItemType): string => {
  switch (type) {
    case "presentation":
      return "border-l-blue-600";
    default:
      return "border-l-gray-400";
  }
};

// Components
const StatCard = ({ value, label }: Stat) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const SpeakerProfile = ({ speakerId }: { speakerId: number }) => {
  const speaker = getSpeakerById(speakerId);
  if (!speaker) return null;

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="relative flex-shrink-0 w-10 h-10">
        <Image
          src={
            speaker.imagem || `/placeholder.svg?height=40&width=40&text=${speaker.alias}`
          }
          alt={speaker.nome}
          fill
          className={`rounded-full object-cover transition-transform duration-300 ${
            speaker.id === 1 || speaker.id === 4 ? "object-top" : "hover:scale-110"
          }`}
        />
      </div>
      <div>
        <p className="font-semibold text-gray-900">{speaker.nome}</p>
        <p className="text-sm text-gray-600">{speaker.credenciais}</p>
      </div>
    </div>
  );
};

const ScheduleItem = ({ item }: { item: ScheduleItem }) => (
  <Card
    className={`mb-4 border-l-4 ${getScheduleItemBorderColor(
      item.type
    )} shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-in-right group`}>
    <CardContent className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.title}
              <span className="text-sm text-gray-500 font-normal ml-3 whitespace-nowrap">
                {item.time}
              </span>
            </h4>
          </div>
          <p className="text-gray-600 mb-3">{item.description}</p>

          {item.speakers && (
            <div className="space-y-2">
              {item.speakers.map((speakerId) => (
                <SpeakerProfile key={speakerId} speakerId={speakerId} />
              ))}
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const SocialLink = ({ icon: Icon, href, label }: SocialLinkType) => (
  <Link
    href={href}
    aria-label={label}
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
    <Icon className="h-4 w-4" />
  </Link>
);

// Main component
export default function CongressoOdontologia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              6 de setembro • Salvador
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Congresso de
              <br />
              <span className="text-cyan-200">Odontologia Digital</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              O futuro da odontologia acontece aqui. Tecnologia, inovação e networking em
              um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-base">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4" />
                <span>Mundo Plaza, Salvador</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>8h às 18h</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold shadow-xl">
              Garanta sua vaga
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {STATS_DATA.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Aprenda com os <span className="text-blue-600">Melhores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Especialistas renomados que estão transformando a odontologia digital no
              Brasil
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
              {SPEAKERS_DATA.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6 text-lg">
                E mais especialistas confirmados em breve
              </p>
              <ScheduleButton />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="text-blue-600">Programação</span> Completa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Um dia completo de aprendizado com os maiores especialistas em odontologia
              digital
            </p>
          </div>

          <div className="max-w-6xl lg:max-w-7xl mx-auto">
            <div className="space-y-4">
              {/* Morning */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center animate-slide-in-left">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  Manhã
                </h3>
                {SCHEDULE_DATA.morning.map((item, index) => (
                  <ScheduleItem key={`morning-${index}`} item={item} />
                ))}
              </div>

              {/* Afternoon */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center animate-slide-in-left">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  Tarde
                </h3>
                {SCHEDULE_DATA.afternoon.map((item, index) => (
                  <ScheduleItem key={`afternoon-${index}`} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-20 text-center animate-fade-in-up">
              <div className="bg-blue-50 rounded-2xl px-6 py-14 sm:px-8 sm:py-16 mb-10 hover:bg-blue-100 transition-colors duration-300 shadow-md mx-auto max-w-4xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações Importantes
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base text-gray-700">
                  {[
                    "Certificado de 8 horas",
                    "Material didático incluso",
                    "Coffee breaks inclusos",
                  ].map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center gap-3 hover:text-blue-600 transition-colors duration-200 min-w-[180px] px-2 ${
                        index === 1 ? "ml-3 lg:ml-0" : ""
                      }`}>
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-center">{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President Section */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua prática odontológica
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Vagas limitadas • Certificado incluso • Networking exclusivo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {[
                "Certificado de 8 horas",
                "Material exclusivo",
                "Coffee break incluso",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-200" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 h-auto font-bold shadow-xl">
              Compre seu ingresso
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="mt-4 text-white/80">Parcelamento em até 12x sem juros</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">COD 2024</h3>
                  <p className="text-sm text-gray-400">
                    Congresso de Odontologia Digital
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                O maior evento de odontologia digital do Nordeste, conectando
                profissionais e promovendo a inovação na área da saúde bucal.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Evento</h4>
              <ul className="space-y-2 text-sm">
                {FOOTER_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">contato@cod2024.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-400">(71) 3333-4444</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    Mundo Plaza
                    <br />
                    Salvador, BA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
