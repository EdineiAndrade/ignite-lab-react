import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import  bgCode from '../assets/code.png'
export function Subscribe (){
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber] = useCreateSubscriberMutation()
    async function handleSubscribe(event: FormEvent){
        event.preventDefault();

        await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event')
    }

    return(
        <div className="md:min-h-screen mt-5 bg-blur bg-cover bg-no-repeat flex flex-col">
            <div className=" items-center mt-5 h-full w-[360px] md:flex-inline md:max-w-[1100px] md:w-full justify-between  md:mt-10 mx-auto md:flex md:flex-row">
                <div className=" gap-4 text-center justify-center item-center p-4 mx-4 mt-4 max-w-[340px] md:max-w-[740px]">
                    <Logo/>
                    <h1 className="mt-4 gap-2 p-2 text-xl md:text-[2.5rem] leading-tight">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500"> React</strong>
                    </h1>  
                    <p className=" text-sm gap2 mb-4 mt-2 text-gray-200 leading-relaxed md:text-xl">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>                  
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="tx-xl2 mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full" >
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text"  
                        placeholder="digite seu nome completo"
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email"  
                        placeholder="digite seu email"
                        onChange={event => setEmail(event.target.value)}
                        />
                        <button
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors "
                        type="submit"
                        >
                            Garantir minha vaga        
                        </button>
                    </form>
                </div>
            </div>
            <img src={bgCode} className="mt-10 "alt="código" />
        </div>
    )
}