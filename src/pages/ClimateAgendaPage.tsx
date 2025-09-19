import { SectionChart } from "@/components/layout/SectionChart";
import SectionTable from "@/components/layout/SectionTable";
import { StatusKind } from "@/components/ui/status-badge";

const ClimateAgendaPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">


        <SectionChart />
        <SectionTable
          title="Avances en el PACCET"
          description="Conoce las acciones que contribuyen a las metas del Programa de acción ante el cambio climático del estado de Tlaxcala"
          rows={[
            {
              avance:
                "Presenta un alto riesgo debido a la caída de bloques por fracturamiento, lo que afecta la infraestructura, especialmente los caminos, aunque no impacta directamente bienes.",
              fecha: "2025-03-04",
              aporte: [
                { label: "Eje 1", info: { title: "Eje 1", description: "Regulación, control y reducción...", href: "#" } },
                { label: "Eje 2", info: { title: "Eje 2", description: "Regulación, control y reducción...", href: "#" } },
                { label: "Eje 3", info: { title: "Eje 3", description: "Regulación, control y reducción...", href: "#" } },
              ],
              medida: "Caída de bloques",
              status: "EN_PROCESO" as StatusKind,
            },
          ]}
        />

    </div>
  );
};

export default ClimateAgendaPage;