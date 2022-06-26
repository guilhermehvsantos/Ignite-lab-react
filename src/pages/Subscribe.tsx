import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";

export function Subscribe () {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <img src="/src/assets/Reacticon.svg" className="absolute"alt="" />
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight text-gray-100">
                        Desenvolvido durante evento da <a href="https://rocketseat.com.br/" target="_blank" className="font-bold text-purple-500 italic inline"><img className="inline w-[18rem]" src="/src/assets/rocketseat.svg" alt="" /></a> com <strong className="text-blue-400 italic opacity-1">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Projeto do Ignite Lab, em apenas uma semana aprendi e pratiquei uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 opacity-90 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Nome completo"
                        onChange={event => setName(event.target.value)}
                        />
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email" 
                        placeholder="Melhor e-mail"
                        onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                        type="submit"
                        disabled={loading}
                        className="mt-4 bg-blue-700 uppercase py-4 font-bold text-sm hover:bg-blue-900 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code.png" className="mt-10" alt="" />
            <Footer />
        </div>
    );
}