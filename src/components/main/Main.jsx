import s from './Main.module.scss'
import { useState } from 'react';
export default function Main(){
   
    const Pães = [
        {
         imagem:"https://img.buzzfeed.com/buzzfeed-static/static/2016-04/4/13/campaign_images/webdr02/adorable-loaves-of-bread-shaped-like-animals-2-3032-1459789256-16_dblbig.jpg?resize=1200",
          nome:"Pãezinhos de porco", 
          preço:'0,50R$'
        },
        {
          imagem:'https://images.squarespace-cdn.com/content/v1/5d87d8caf0bb481aeda521e7/b91e573c-f9fd-46cb-800a-9e9d2fc4d330/DSC_0185.jpg',
          nome:'Pãezinhos de passarinho', preço:'1,00R$'
        },
        {
          imagem:'https://farm1.static.flickr.com/194/472097903_b781a0f4f8.jpg',
          nome:'Fatias hello world',
          preço:'0,75R$'
        },
        {
          imagem:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88561092-1f31-4ef9-84ed-8c1d42917c97/degeifr-ee99d30c-8460-4085-9a73-576fded90561.jpg/v1/fill/w_1280,h_960,q_75,strp/weird_bread_shape_by_kid_z4p_degeifr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvODg1NjEwOTItMWYzMS00ZWY5LTg0ZWQtOGMxZDQyOTE3Yzk3XC9kZWdlaWZyLWVlOTlkMzBjLTg0NjAtNDA4NS05YTczLTU3NmZkZWQ5MDU2MS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dUp92jE3ba7UYbRwyD3bVBb9ULMn1rkTzNF8PwgypFI',
          nome: 'Fatia bugada',
          preço:'05̵̞̳̭̻͍̟̗̳̥̭͉͔͚͍͂͒̒0̴̡͇̳̀͐̃͝R$'
        }
      ]
     const Ratos = [
       {
        imagem:'https://preview.redd.it/here-is-the-rat-bread-as-promised-v0-31adl1z7irgd1.jpeg?auto=webp&s=1624da2de20a9c6484fff74aba60ac4b8de3a2f2',
        nome:'ratu',
        preço:'vale nem 1 centavo'
       },
       {
        imagem:'https://www.dansukker.co.uk/Admin/Public/GetImage.ashx?image=%2FFiles%2Fproduct-cataloge%2Frecipe_large%2Fhalloween_rats.jpg&width=640&format=webp',
        nome:'pão ratin',
        preço:'2,00R$'
       },
       {
        imagem:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR7qGHGsjMTe4bqkbywZEIs4ohI3EYap3VhmWUgIegPi1DczNl1bO88jQv83ihIY1FEK0Z8dstg8K18m1L-7r8-J-4SClt680UeVe0vznpar5VdHF_NahQ5WejbTyGhkpybqGyKihW8Ymm/w1200-h630-p-k-no-nu/garden+113.jpg',
        nome:'pão ratin de queijo',
        preço:'4,00R$'
       },
       {
        imagem:'https://i.pinimg.com/236x/3e/30/f2/3e30f268879a14b96c82ff2cace94a56.jpg',
        nome:'Raton gourmet',
        preço:'50,00R$'
       }
     ]

      const [itens, SetImage] = useState(Pães);

      const Rato = () => {
        SetImage(Ratos);
      };

      const Paes = () => {
       SetImage(Pães)
      };
   
    return(
<main>
     
        
        {
        itens.map((item) =>(
          <section className={s.Paes}>
          <img src={item.imagem} alt="" />
          <h2>{item.nome}</h2>
          <p>preço: {item.preço}</p>
          </section>
       ))
      }
      <section className={s.Botoes}>
        <button onClick={Paes}>Voltar</button>
        <button onClick={Rato}>Nossa expecialidade</button>
      </section>

      
    </main>
    )
}