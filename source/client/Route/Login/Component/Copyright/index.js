import moment from 'moment';

const year = moment().year();

const Copyright = () => {
  return (
    <div className='Copyright'>
      {year} © Ecolibrium Inc. All Rights Reserved
    </div>
  );
};

export default Copyright;
