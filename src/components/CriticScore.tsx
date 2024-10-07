import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 75 ? "green.300" : score > 60 ? "yellow.300" : "red.300";
  return (
    <Badge color={scoreColor} fontSize="12px" borderRadius={30} px={1}>
      {score}
    </Badge>
  );
};

export default CriticScore;
