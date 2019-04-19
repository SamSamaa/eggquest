import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import logo from '../../assets/images/logo.png';
import './Voldemort.css';

class Voldemort extends Component {
  render() {
    return (
      <div className='Voldemort'>
        <div className='nav'>
          <img className='logo' src={logo} />
        </div>
        <div className='gallery'>
          <div className='images'>
            <Grid relaxed columns={4}>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MoOhAKhN-jbBqNo99a8oD1ubFK_W2aJAbkBjOJRxhInFfKcxuQ' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3W5a77jyqg3xZPpr5sv0_zcRKuYJckYn3O_BFplKelG-b1d7' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://blog.bulletproof.com/wp-content/uploads/2019/03/New-Study-Claims-Eggs-Cause-Heart-Disease_header-752x401.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/01/main/pristine-sunny-side-up-eggs.jpg?itok=4GSTJDNE' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQec1yjRzTaOzDJNYUM9B6cIJsHf9MEYSiQbhxQbe5JdSpt7spxhQ' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGZap1KCkRQDOfLkO5LTJDZ6QbMyBo-KGOPlkmR0VPYBdHjX9YQ' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.duracuire.com/wp-content/uploads/Oeuf-%C3%A0-la-coque.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fe4927d2a-ca72-4717-8384-6c00a8b84501.2Ejpeg/748x372/quality/80/crop-from/center/oeuf-au-plat.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeC2Q_3PW4fJlnlQUxUkKGy4xDuVT-mW9D5PDru24h3AlLx9vJA' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://i.onmeda.de/fr/cholesterin-500x250.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F8a5bbbf7-a978-4b92-a6e4-8c65c8e930ac.2Ejpeg/748x372/quality/80/crop-from/center/oeuf-miroir.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F0ca9f76f-1625-4ad9-8dd2-6cbcfb82eb6c.2Ejpeg/748x372/quality/80/crop-from/center/oeuf-mornay.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MoOhAKhN-jbBqNo99a8oD1ubFK_W2aJAbkBjOJRxhInFfKcxuQ' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3W5a77jyqg3xZPpr5sv0_zcRKuYJckYn3O_BFplKelG-b1d7' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://blog.bulletproof.com/wp-content/uploads/2019/03/New-Study-Claims-Eggs-Cause-Heart-Disease_header-752x401.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/01/main/pristine-sunny-side-up-eggs.jpg?itok=4GSTJDNE' />
              </Grid.Column>
            </Grid>
          </div>
          <div className='pub'>
            <Card 
              image='https://www.matines.com/files/2012/04/oeuf-coque.jpg'
              header='Do you want a coque bien dure ?'
              description='Inscris toi sur bigcoque.com et rejoins de nombreux oeufs de ta région.'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Voldemort;