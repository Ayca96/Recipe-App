import styled from 'styled-components';
import Foto from "../../images/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg"

const FotoDiv = styled.div`
 width: 100%;
 height: 100vh;
 background-image: url(${Foto});
  background-size: cover; /* Görüntünün tüm divi kaplamasını sağlar */
  background-position: center; /* Görüntüyü ortalar */
  background-repeat: no-repeat;
`;

export default FotoDiv;
