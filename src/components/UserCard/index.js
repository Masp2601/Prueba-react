import './user-card.css';

import dayjs from 'dayjs';
import es from 'dayjs/locale/es';

const UserCard = ({ ...userInfo }) => {

  const gender = userInfo.gender === 'female'
    ? 'Femenino'
    : userInfo.gender === 'male'
      ? 'Masculino'
      : 'Otro';

  const dateOfBirth = dayjs(userInfo.dateOfBirth).locale(es).format('DD MMM YYYY');
  const registerDate = dayjs(userInfo.registerDate).locale(es).format('DD MMM YYYY');

  return (
    <div className="user-card-container">
      <div className="info">
        <div className="image-name">
          <img
            src={userInfo.picture}
            alt="User avatar"
          />
          <p>{userInfo.title} {userInfo.firstName} {userInfo.lastName}</p>
        </div>
        <div className="text-info">
          <p><span>ID:</span> {userInfo.id}</p>
          <p><span>Género:</span> {gender}</p>
          <p><span>Fecha de nacimiento:</span> {dateOfBirth}</p>
          <p><span>Fecha de registro:</span> {registerDate}</p>
          <p><span>Email:</span> {userInfo.email}</p>
          <p><span>Teléfono:</span> {userInfo.phone}</p>
        </div>
      </div>
      <div className="location">
        <div>
          <p><span>Estado:</span> Nordjylland</p>
          <p><span>Dirección:</span> 9614, SÃ¸ndermarksvej</p>
          <p><span>Ciudad:</span> Kongsvinger</p>
        </div>
        <div>
          <p><span>País:</span> Denmark</p>
          <p><span>Zona Horaria:</span> -9:00</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
