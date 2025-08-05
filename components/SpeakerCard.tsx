"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Speaker = {
  id: number;
  nome: string;
  especialidade: string;
  bio: string | ReactNode;
  imagem: string;
  credenciais: string;
  alias: string;
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (bioRef.current) {
      const isTextClamped = bioRef.current.scrollHeight > bioRef.current.clientHeight;
      setIsClamped(isTextClamped);
    }
  }, [speaker.bio]);

  return (
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-full aspect-[2/3] lg:w-80 overflow-hidden flex-shrink-0">
            <Image
              src={speaker.imagem || "/placeholder.svg?height=384&width=256"}
              alt={speaker.nome}
              fill
              className={`object-cover transition-transform duration-300 object-top ${
                speaker.id === 1 || speaker.id === 4 ? "scale-80" : "scale-105"
              }`}
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
              <p
                ref={bioRef}
                className={`text-gray-600 leading-relaxed text-sm lg:text-base mb-6 ${
                  showFullBio ? "" : "line-clamp-[8] max-h-[12rem] overflow-hidden"
                }`}>
                {speaker.bio}
              </p>
            </div>

            {(isClamped || showFullBio) && (
              <button
                type="button"
                onClick={() => setShowFullBio((prev) => !prev)}
                className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                <span className="text-sm lg:text-base">
                  {showFullBio ? "Ver menos" : "Ver perfil completo"}
                </span>
                {showFullBio ? (
                  <ArrowUpRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
