import React, { useEffect, useState } from 'react';
import './styles.css';

const ListItem = ({
  item: { title, price, serviceTime, rating, latitude, longitude },
}) => {
  const redirectToMarker = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const titleToImage = {
    
    restaurant1:  'https://img.freepik.com/photos-gratuite/restaurant-typiquement-francais-tables-chaises_1147-445.jpg?w=996&t=st=1685543672~exp=1685544272~hmac=57c9e78b6d3359e78d76da9d438fb352136eaf1ba9791bf2e4e5154268e6dcf8',
    restaurant2:  'https://media.gettyimages.com/id/1248298359/fr/photo/int%C3%A9rieur-de-restaurant-de-luxe-la-nuit.jpg?s=612x612&w=0&k=20&c=GbevmxF-qBZ7wcxi0cBXM51wYCkgtBO1CibbIN0qaUg=',
    restaurant3:  'https://media.gettyimages.com/id/1248298359/fr/photo/int%C3%A9rieur-de-restaurant-de-luxe-la-nuit.jpg?s=612x612&w=0&k=20&c=GbevmxF-qBZ7wcxi0cBXM51wYCkgtBO1CibbIN0qaUg=',
    restaurant4: 'https://media.gettyimages.com/id/1288064106/fr/photo/int%C3%A9rieur-vide-de-restaurant.jpg?s=612x612&w=0&k=20&c=WpEEMXPKwJLnhS-_qgonAQnnHKDf-FyvXfcxts5swjQ=',
    restaurant5: 'https://media.gettyimages.com/id/1296352726/fr/photo/tables-set-in-restaurant.jpg?s=612x612&w=0&k=20&c=bHFnYq-oGfWs4ITDtHWoDX4UFCa4NuT07pXxnYSh2Jc=',
    restaurant6: "https://media.gettyimages.com/id/1209064521/fr/photo/an-empty-luxurious-restaurant.jpg?s=612x612&w=0&k=20&c=NpAfuTeKPwZD9wps-Vulc_E9iSrYzbC3Pw0JIqroiWU=",
    restaurant7: 'https://media.gettyimages.com/id/1248298343/fr/photo/rendu-3d-dun-int%C3%A9rieur-de-restaurant-de-luxe-la-nuit.jpg?s=612x612&w=0&k=20&c=CQtf6hfxGGPP3EN52yW-WisCws5Kst-bWM6LWmMMEIU=',
restaurant8: 'https://media.gettyimages.com/id/1073455468/fr/photo/d%C3%A9couvre-%C3%A0-lint%C3%A9rieur-dun-bar-aucun-peuple.jpg?s=612x612&w=0&k=20&c=KvrN5UROmcLyqNCflpdjfgrm1wEs29MoBUzLB623sUI=',
restaurant9: 'https://media.gettyimages.com/id/1271897466/fr/photo/restaurant-vide.jpg?s=612x612&w=0&k=20&c=69fu_rkClx9ZM0OMsB6s5Mzqlm6n4EjqqFOeeYZM7hc=',
restaurant10: 'https://media.gettyimages.com/id/1224771205/fr/photo/int%C3%A9rieur-vide-de-restaurant.jpg?s=612x612&w=0&k=20&c=dJL-2BK6aew-VBtCoo9qjQfjqHmru-4kz2pNgSskhh4=',
restaurant11: 'https://media.gettyimages.com/id/1224771205/fr/photo/int%C3%A9rieur-vide-de-restaurant.jpg?s=612x612&w=0&k=20&c=dJL-2BK6aew-VBtCoo9qjQfjqHmru-4kz2pNgSskhh4=',
restaurant12: 'https://media.gettyimages.com/id/1263887601/fr/photo/modern-caf%C3%A9-int%C3%A9rieur.jpg?s=612x612&w=0&k=20&c=JxqyYwGwZSd6nATdftY8x6YhzleNB7Bk84dJ0KFEGIQ=',
restaurant13: 'https://media.gettyimages.com/id/1428594094/fr/photo/int%C3%A9rieur-de-caf%C3%A9-vide-avec-tables-en-bois-cafeti%C3%A8re-p%C3%A2tisseries-et-suspensions.jpg?s=612x612&w=0&k=20&c=jkZxmq2RRTy4FojXJuRE7nwxiqc_cXk-1JX8wsPpgFk=',
restaurant14: 'https://media.gettyimages.com/id/1273557779/fr/photo/restaurant-patio.jpg?s=612x612&w=0&k=20&c=6d0kvU8-Xoz2ku9M5iJd3viQlKVJUx1Rn0JcKg4bDMo=',
restaurant15: 'https://media.gettyimages.com/id/1280031933/fr/photo/petit-caf%C3%A9-ext%C3%A9rieur.jpg?s=612x612&w=0&k=20&c=qWQC4cUrlPBVtCVo16PcWd1gWJODgiBaoAImsU2Vki4=',
restaurant16: 'https://media.gettyimages.com/id/1395507586/fr/photo/int%C3%A9rieur-de-caf%C3%A9-moderne-avec-de-beaux-meubles.jpg?s=612x612&w=0&k=20&c=Gvzo3mfVoWi4-sY3mXW7hsiFcezh2Kt9dK0GQlQYivI='
  };

  const [coverSrc, setCoverSrc] = useState(titleToImage[title] || '');

  useEffect(() => {
    setCoverSrc(titleToImage[title] || '');
  }, [title]);

  return (
    <div className='listItem-wrap'>
      {coverSrc && <img src={coverSrc} alt='' />}
      <header>
        <h4>{title}</h4>
        <span>🌟{Math.floor(Math.random() * 5) + 1}</span>
      </header>
      <footer>
        <p>
          <b>{Math.floor(Math.random() * 15) + 10} - {Math.floor(Math.random() * 5) + 30} min</b>
          <span> Delivery Fee {Math.floor(Math.random() * 8) + 7} dh</span>
        </p>
        {price && <p><b>${price}</b></p>}
      </footer>
      <div>
        <button
          style={{ backgroundColor: '#3bb19b', borderColor: '#3bb19b' }}
          className='btn btn-primary d-block mx-auto my-4'
          type='submit'
          onClick={() => redirectToMarker(latitude, longitude)}
        >
          Voir position
        </button>
      </div>
    </div>
  );
};

export default ListItem;

   