"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import Page from "@/app/components/ui/Page"
import Centered from "@/app/components/ui/Centered"
import Typography from "@/app/components/ui/Typography"
import Button from "@/app/components/ui/Button"
import AlertModal from "@/app/components/AlertModal"
import Switch from "@/components/ui/switch"
import FAQInput from "@/app/components/FAQ/FAQInput"
import ComboBox from "@/app/components/ui/ComboBox"
import Input from "@/app/components/ui/Input"
import { getFormattedDate } from "@/lib/utils"
import { upload } from "@/app/constants/icons"
import { classificacaoOpcoes, generoOpcoes, Movie, situacaoOpcoes } from "./types/movie"

const NovoFilmePage = () => {
    const router = useRouter()

    const [nome, setNome] = useState<string>("")
    const [nomeOriginal, setNomeOriginal] = useState<string>("")
    const [dataLancamento, setDataLancamento] = useState<string>(getFormattedDate())
    const [situacao, setSituacao] = useState<string | boolean>("Em Breve")
    const [classificacao, setClassificacao] = useState<string | boolean>("Não Definida")
    const [ordem, setOrdem] = useState<string>("")
    const [tags, setTags] = useState<string[]>([])
    const [tagInput, setTagInput] = useState<string>("")
    const [genero, setGenero] = useState<string | boolean>("")
    const [diretor, setDiretor] = useState<string>("")
    const [duracao, setDuracao] = useState<string>("")
    const [distribuidora, setDistribuidora] = useState<string>("")
    const [elenco, setElenco] = useState<string>("")
    const [trailerDublado, setTrailerDublado] = useState<string>("")
    const [trailerLegendado, setTrailerLegendado] = useState<string>("")
    const [sinopse, setSinopse] = useState<string>("")
    const [ativo, setAtivo] = useState<boolean>(true)
    const [tmdbSearch, setTmdbSearch] = useState<string>("")

    const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false)
    const [salvarESairModalOpen, setSalvarESairModalOpen] = useState<boolean>(false)

    const handleAddTag = () => {
        if (tagInput && !tags.includes(tagInput)) {
            setTags([...tags, tagInput])
            setTagInput("")
        }
    }

    const handleRemoveTag = (tag: string) => {
        setTags(tags.filter((t) => t !== tag))
    }

    const handleSalvar = async (sair?: boolean) => {
        const newMovie: Movie = {
            nome,
            nomeOriginal,
            dataLancamento,
            situacao: situacao as string, 
            classificacao: classificacao as string, 
            ordem,
            tags,
            genero: genero as string, 
            diretor,
            duracao,
            distribuidora,
            elenco,
            trailerDublado,
            trailerLegendado,
            sinopse,
            ativo,
            imagens: [],
        }

        try {
            console.log("Movie data to save:", newMovie)

            if (sair) router.push("/cadastro/filmes")
        } catch (error) {
            console.error("Error creating movie:", error)
        }
    }

    const handleVoltar = () => router.back()

    const handlePesquisarTMDB = () => {
        console.log("Searching TMDB for:", tmdbSearch)
    }


    return (
        <>
            <Page title="Novo Filme" subtitle="Cadastre e gerencie novos filmes exibidos no cinema">
                <Centered className="gap-y-6" direction="col">
                    {/* Image upload section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2].map((_, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                                    <img
                                        src="/"
                                        alt="Imagem"
                                        className="w-full h-full object-cover bg-red-100"
                                    />
                                    <button className="absolute top-2 right-2 bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700">
                                        Apagar
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">TAMANHO RECOMENDADO: XXXpx</p>
                                <Button label="ENVIAR IMAGEM" secondary icon={upload} className="w-full" />
                            </div>
                        ))}
                    </div>

                    <div className="w-full border-t border-gray-200 my-2"></div>

                    {/* Active toggle */}
                    <Centered className="gap-x-2" items="center" justify="start">
                        <Typography weight="500">Ativo</Typography>
                        <Switch value={ativo} setValue={setAtivo} />
                    </Centered>

                    {/* TMDB search */}
                    <div className="w-full">
                        <Typography weight="500" className="mb-2">
                            Carregar via TMDB
                        </Typography>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Digite o nome do filme..."
                                value={tmdbSearch}
                                setValue={setTmdbSearch}
                                className="flex-grow"
                            />
                            <Button label="PESQUISAR" primary onClick={handlePesquisarTMDB} />
                        </div>
                    </div>

                    {/* Movie details */}
                    <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <FAQInput label="Nome" obrigatoria>
                            <Input placeholder="Nome do filme" value={nome} setValue={setNome} />
                        </FAQInput>
                        <FAQInput label="Nome Original">
                            <Input placeholder="Nome original do filme" value={nomeOriginal} setValue={setNomeOriginal} />
                        </FAQInput>
                        <FAQInput label="Data de Lançamento" obrigatoria>
                            <Input placeholder={dataLancamento} value={dataLancamento} setValue={setDataLancamento} /> 
                            <div className="text-xs text-gray-500 mt-1">
                                O filme estará ativo automaticamente na data predefinida.
                            </div>
                        </FAQInput>
                        <FAQInput label="Situação" obrigatoria>
                            <ComboBox label="Selecione" list={situacaoOpcoes} value={situacao} setValue={setSituacao} />
                        </FAQInput>
                        <FAQInput label="Classificação Indicativa" obrigatoria>
                            <ComboBox
                                label="Selecione"
                                list={classificacaoOpcoes}
                                value={classificacao}
                                setValue={setClassificacao}
                            />
                        </FAQInput>
                        <FAQInput label="Ordem">
                            <Input placeholder="Ordem de exibição" value={ordem} setValue={setOrdem} />
                        </FAQInput>
                    </Centered>

                    {/* Tags */}
                    <FAQInput label="Tags (Palavra-Chave)">
                        <div className="flex gap-2 mb-2">
                            <Input
                                placeholder="Adicionar tag"
                                value={tagInput}
                                setValue={setTagInput}
                                className="flex-grow"
                            />
                            <Button label="+" primary onClick={handleAddTag} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="bg-gray-200 rounded-md px-3 py-1 flex items-center gap-2">
                                    <span>{tag}</span>
                                    <button onClick={() => handleRemoveTag(tag)} className="text-gray-500 hover:text-gray-700">
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </FAQInput>

                    {/* More movie details */}
                    <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <FAQInput label="Gênero">
                            <ComboBox label="Selecione" list={generoOpcoes} value={genero} setValue={setGenero} />
                        </FAQInput>
                        <FAQInput label="Diretor">
                            <Input placeholder="Nome do diretor" value={diretor} setValue={setDiretor} />
                        </FAQInput>
                        <FAQInput label="Duração">
                            <Input placeholder="Ex: 120min" value={duracao} setValue={setDuracao} />
                        </FAQInput>
                        <FAQInput label="Distribuidora">
                            <Input placeholder="Nome da distribuidora" value={distribuidora} setValue={setDistribuidora} />
                        </FAQInput>
                        <FAQInput label="Elenco">
                            <Input placeholder="Nomes dos atores principais" value={elenco} setValue={setElenco} />
                        </FAQInput>
                    </Centered>

                    {/* Trailers */}
                    <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <FAQInput label="Trailer Dublado">
                            <Input
                                placeholder="URL do trailer dublado (YouTube)"
                                value={trailerDublado}
                                setValue={setTrailerDublado}
                            />
                        </FAQInput>
                        <FAQInput label="Trailer Legendado">
                            <Input
                                placeholder="URL do trailer legendado (YouTube)"
                                value={trailerLegendado}
                                setValue={setTrailerLegendado}
                            />
                        </FAQInput>
                    </Centered>

                    {/* Synopsis */}
                    <FAQInput label="Sinopse">
                        <Input placeholder="Descrição do filme" value={sinopse} setValue={setSinopse} /> 
                    </FAQInput>

                    {/* Action buttons */}
                    <Centered className="gap-x-2" justify="end">
                        <Button label="SALVAR" primary onClick={() => setSalvarModalOpen(true)} />
                        <Button label="SALVAR E SAIR" secondary onClick={() => setSalvarESairModalOpen(true)} />
                        <Button label="CANCELAR" secondary onClick={handleVoltar} />
                    </Centered>
                </Centered>
            </Page>

            {/* Confirmation modals */}
            <AlertModal
                isOpen={salvarModalOpen}
                title="Deseja salvar?"
                message="Ao confirmar, ação não poderá ser desfeita."
                confirmLabel="SALVAR"
                onCancel={() => setSalvarModalOpen(false)}
                onConfirm={() => handleSalvar(false)}
                hideOnOutsideClick={true}
            />
            <AlertModal
                isOpen={salvarESairModalOpen}
                title="Deseja salvar e sair?"
                message="Ao confirmar, ação não poderá ser desfeita."
                confirmLabel="SALVAR E SAIR"
                onCancel={() => setSalvarESairModalOpen(false)}
                onConfirm={() => handleSalvar(true)}
                hideOnOutsideClick={true}
            />
        </>
    )
}

export default NovoFilmePage
