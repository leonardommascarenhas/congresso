"use client";

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
    bio: "Mestre e Doutorando em Implantodontia. 18 anos coordenando Especialização em Implantodontia. Coordenador do Curso de Especialização em Implantodontia CTA Salvador, Feira de Santana e Aracaju.",
    imagem: "/placeholder.svg?height=200&width=200&text=Prof.+Tiago+Cadidé",
    credenciais: "Mestre • Doutorando • 18 anos de experiência",
    alias: "TC",
  },
  {
    id: 2,
    nome: "Dra. Daniela Barbosa",
    especialidade: "Implantodontia e Prótese Dentária",
    bio: "Formada pela Escola Bahiana de Medicina e Saúde Pública. Especialização em Implantodontia e Prótese Dentária pela CTA Academy São Paulo. Especialista em Cirurgia Bucal pelo Instituto Prime.",
    imagem: "/Doutores/DanielaBarbosa.jpeg",
    credenciais: "CTA Academy • Instituto Prime",
    alias: "DB",
  },
  {
    id: 3,
    nome: "Dr. Fábio Barbosa",
    especialidade: "Cirurgias Avançadas e Estética Periodontal",
    bio: "Mestre em Implantes Dentários pela São Leopoldo Mandic. Pós-graduado em Cirurgias Avançadas pelo M.A.R.C Miami. CEO do Instituto Odontomedico e proprietário da Zircolab.",
    imagem: "/Doutores/Fabio.webp",
    credenciais: "UFBA • São Leopoldo Mandic • M.A.R.C Miami",
    alias: "FB",
  },
  {
    id: 4,
    nome: "Dr. Leonardo Barreto",
    especialidade: "Prótese Dentária e Laminados Cerâmicos",
    bio: "Especialista Mestre em Prótese Dentária. Referência em laminados cerâmicos e fluxo digital protético. Expertise em estética dental avançada.",
    imagem: "/placeholder.svg?height=200&width=200&text=Dr.+Leonardo+Barreto",
    credenciais: "Mestre em Prótese • Estética Digital",
    alias: "LB",
  },
  {
    id: 5,
    nome: "Dr. Lucas Cunha",
    especialidade: "Tecnologias em Implantodontia",
    bio: "Especialista Mestre e Doutor em Implantodontia. Pesquisador em novas tecnologias aplicadas à implantodontia. Professor universitário.",
    imagem: "/placeholder.svg?height=200&width=200&text=Dr.+Lucas+Cunha",
    credenciais: "Mestre • Doutor • Professor",
    alias: "LC",
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

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50">
    <CardContent className="p-0">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative w-full aspect-[2/3] lg:w-80 overflow-hidden flex-shrink-0">
          <Image
            src={speaker.imagem || "/placeholder.svg?height=384&width=256"}
            alt={speaker.nome}
            fill
            className="object-cover scale-105 transition-transform duration-300"
            sizes="(max-width: 1023px) 100vw, 320px"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-900/70 via-blue-900/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 text-white">
            <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium px-3 py-1 mb-2">
              {speaker.especialidade}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
              {speaker.nome}
            </h3>
            <p className="text-xs lg:text-sm text-blue-600 font-medium mb-4 uppercase tracking-wide">
              {speaker.credenciais}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6 line-clamp-4">
              {speaker.bio}
            </p>
          </div>

          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            <span className="text-sm lg:text-base">Ver perfil completo</span>
            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
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
          className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {SPEAKERS_DATA.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6 text-lg">
                E mais especialistas confirmados em breve
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent px-8 py-3">
                Ver programação completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mensagem do <span className="text-blue-600">Presidente</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <div className="h-64 lg:h-full relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Dr. Eduardo Santos"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <h3 className="text-xl font-bold mb-1">Dr. Eduardo Santos</h3>
                        <p className="text-sm opacity-90">Presidente do Congresso</p>
                        <p className="text-xs opacity-75 mt-1">CRO-BA 12345</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="mb-8">
                      <div className="text-6xl text-blue-600/20 font-serif mb-4">"</div>
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                          É com <strong>grande satisfação</strong> que convido você para
                          participar do maior evento de odontologia digital do Nordeste.
                          Este congresso representa um marco na evolução da nossa
                          profissão.
                        </p>
                        <p>
                          Durante este dia intenso de aprendizado, você terá a
                          oportunidade de conhecer as últimas inovações em implantodontia
                          digital, ortodontia invisível, próteses CAD/CAM e muito mais.
                          Nossa missão é <strong>democratizar o conhecimento</strong> e
                          tornar a odontologia digital acessível a todos os profissionais.
                        </p>
                        <p>
                          Esperamos você em Salvador para juntos construirmos o{" "}
                          <strong>futuro da odontologia brasileira</strong>. Será um
                          prazer recebê-lo neste evento que promete transformar sua visão
                          sobre a prática odontológica.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                            <Stethoscope className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              Dr. Eduardo Santos
                            </p>
                            <p className="text-sm text-gray-600">
                              Mestre em Implantodontia • 20+ anos de experiência
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
                          <SocialLink icon={Mail} href="#" label="Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
