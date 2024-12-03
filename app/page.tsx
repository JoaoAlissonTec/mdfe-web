import CaminhaoSvg from "@/app/imgs/icons/caminhao_svg.svg";
import DocumentoSvg from "@/app/imgs/icons/documento_svg.svg";
import BuscarDocumentoSvg from "@/app/imgs/icons/buscar_documento_svg.svg";
import DocumentosNegocio from "@/app/imgs/documentos_negocio.jpg";
import TrabalhoNegocio from "@/app/imgs/cowork_business.jpg";
import Accordion from "@/components/ui/accordion";

type ItemType = {
	icon: any;
	description: string;
	color?: string;
};

export default function Home() {
	return (
		<>
			<section className="flex flex-col justify-center h-96 px-10 min-h-[80vh]">
				<h1 className="font-bold text-3xl">Bem-vindo!</h1>
				<p>Gere já seu Manifesto Eletrônico de Documentos Fiscais (MDF-e)</p>
			</section>
			<section className="bg-primary w-full flex justify-around items-center p-4">
				<Item
					icon={DocumentoSvg}
					description="Criar novos manifestos"
					color="#FBFFF1"
				/>
				<Item
					icon={CaminhaoSvg}
					description="Transmitir manifestos"
					color="#FBFFF1"
				/>
				<Item
					icon={BuscarDocumentoSvg}
					description="Buscar seus manifestos transmitidos"
					color="#FBFFF1"
				/>
			</section>
			<section className="p-10 flex flex-col justify">
				<h1 className="font-bold text-lg mb-5">Possiveis dúvidas</h1>
				<div className="flex flex-col gap-2">
					<Accordion title="Como posso gerar o MDFe?">
						<p>
							Simples! Basta informar as informações necessárias e fornecer um
							certificado digital para a assinatura do documento, nosso sistema
							automaticamente gera para você o documento assinado que possa ser
							transmitido para a SEFAZ.
						</p>
					</Accordion>
					<Accordion title="Quais funções posso encontrar no sistema?">
						<p>
							Aqui você vai poder transmitir, cancelar, encerrar e buscar os
							manifestos como preferir, seguindo as regras da SEFAZ para evitar
							excessões inesperadas.
						</p>
					</Accordion>
				</div>
			</section>
		</>
	);
}

const Item = ({ icon: Icon, description, color = "black" }: ItemType) => {
	return (
		<div className="flex flex-1 flex-col items-center gap-2">
			<Icon width={50} height={50} fill={color} />
			<p style={{ color: color }} className="text-center">
				{description}
			</p>
		</div>
	);
};
