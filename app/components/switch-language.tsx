"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import logov  from "../../public/images/viet.png"
import logoe from "../../public/images/english.png"

interface SwitchLanguageProps {
  initialLanguage: string; 
}
export function SwitchLangugae({ initialLanguage }: SwitchLanguageProps) {
  
  const [language, setLanguage] = useState<string>(initialLanguage);

  
  const labelText = language === 'en' ? 'English' : 'Vietnamese'; 

 
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'vi' : 'en'));
  };

  return (
    <div className="flex items-center space-x-2">
   
      <Switch id="language-switch" onCheckedChange={toggleLanguage} />
      <Label htmlFor="language-switch">{labelText}</Label>
    
      <Image  className="h-10 w-10" src={labelText =="English"?logoe:logov} alt=""></Image>
      
    </div>
  );
}
