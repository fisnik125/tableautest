import Image from "next/image";
import TableauDashboard from "./components/Tableau";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full h-full">
        <div className="w-full overflow-x-auto">
          <TableauDashboard 
            url={'https://public.tableau.com/views/SalesDashboard_17329870588250/SalesDasboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link&embed=y'} 
            height="800px" 
            width="1000px" 
          />
        </div>
      </main>
    </div>
  );
}
