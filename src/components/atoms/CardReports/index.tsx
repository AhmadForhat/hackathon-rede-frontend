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
  commentCount,
  text,
  hasClick=true
}) => {
  const history = useHistory()

  function handleClick(id: string) {
    history.push(`/reportes/${id}`)
  }
  return (
    <Container hasClick={hasClick} onClick={() => hasClick && handleClick(id)}>
      <Card>
        <ContainerTitles>
          {body?.title && <Title>{body.title}</Title>}
          <Title>{username}</Title>
        </ContainerTitles>
        <ContentInfosDate>
          {createdAt && (
            <DescriptionDate>
              <Clock /> {moment(new Date(createdAt)).format('DD/MM')}
            </DescriptionDate>
          )}
          {commentCount && <Comments>
            <MessageCircle /> {commentCount}
          </Comments>}
          {text && text}
        </ContentInfosDate>
      </Card>
    </Container>
  );
};

export default CardReports;
