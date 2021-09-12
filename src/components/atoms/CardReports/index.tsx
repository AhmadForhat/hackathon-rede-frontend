import {
  Container,
  Title,
  ContentInfosDate,
  DescriptionDate,
  Card,
  ContentInfos,
  Comments,
  Anexts,
} from "./styles";

import { Clock, MessageCircle, Paperclip, AlignLeft } from "react-feather";

const CardReports: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>User Profile (View e editing)</Title>

        <ContentInfosDate>
          <DescriptionDate>
            <Clock /> 2 Aug
          </DescriptionDate>
        </ContentInfosDate>

        <ContentInfos>
          <Comments>
            <MessageCircle /> 12
          </Comments>

          <Anexts>
            <Paperclip />
            <AlignLeft />
          </Anexts>
        </ContentInfos>
      </Card>
    </Container>
  );
};

export default CardReports;
