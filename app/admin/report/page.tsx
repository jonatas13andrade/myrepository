import Typography from "@mui/material/Typography";
import { getColaboratorData } from "@/app/lib/data";

export default async function PageReport() {
  const colaborator = await getColaboratorData();
  return (
    <div>
      <Typography variant="h3"> Listagem de Colaboradores </Typography>
   { colaborator !== undefined &&(
    <ul>
    {colaborator.map((colab) => (
      <li key={colab.id}>
        <div>
        {colab.name} - {colab.mat}
        </div>
      </li>

    ))}
  </ul>

   )}
   
</div>
  );
}
