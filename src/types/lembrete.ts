import React,{useState} from 'react'

interface Lembrete{
    titulo : string
}

const[lembretes,setLembretes] = useState<Lembrete[]>([]);

function adicionarLembrete(titulo:string){
    if(titulo===null){
        return;
    }
    const novoLembrete: Lembrete={
        titulo: titulo
    }

    setLembretes([...lembretes,novoLembrete]);
}