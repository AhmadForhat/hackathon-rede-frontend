import { useHistory } from "react-router";
import {
  Clock,
  MessageCircle,
} from "react-feather";
import moment from 'moment'

import { PostProps } from 'pages/Reports'
import {
  Container,
  ContainerTitles,
  Title,
  ContentInfosDate,
  DescriptionDate,
  Card,
  Comments,
} from "./styles";

moment.locale('pt-br')

const CardReports: React.FC<PostProps> = ({
  body,
  id,
  username,
  createdAt,
  commentCount
}) => {
  const history = useHistory()

  function handleClick(id: string) {
    history.push(`/reportes/${id}`)
  }
  return (
    <Container onClick={() => handleClick(id)}>
      <Card>
        <ContainerTitles>
          <Title>{body.title}</Title>
          <Title>{username}</Title>
        </ContainerTitles>
        <ContentInfosDate>
          <DescriptionDate>
            <Clock /> {moment(new Date(createdAt)).format('DD/MM')}
          </DescriptionDate>
          <Comments>
            <MessageCircle /> {commentCount}
          </Comments>
        </ContentInfosDate>
      </Card>
    </Container>
  );
};

export default CardReports;
