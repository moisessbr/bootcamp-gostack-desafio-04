import React, {Component} from 'react';
import Post from './Post';
import picDiego from '../assets/images/6d0eaae48ebad937f0632b3cf308cd852b2d1dec.png';
import picJulio from '../assets/images/6b41f71b0f835bd8c87070ad1bc9c9e360747fa1.png';
import picGabriel from '../assets/images/c519d2910f58d0ecdcfe7498ef39551f06ee1995.png';
import picCezar from '../assets/images/d5807a68287b188b7a3617ea15126446ad6af950.png';
import picClara from '../assets/images/e9eb7b7e1b0fa6f95727d84b853dddb4daa91b5e.png';



class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Júlio Alcantara',
          avatar: picJulio
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: picDiego
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time. Ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: picGabriel
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: picClara
            },
            content: "Também estou fazendo o Bootcamp e estou adorando. Estou no terceiro modulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: picCezar
            },
            content: "Que maaaaassaa! Estou pensando em me inscrever para a próxima turma e ver qual é a desse Bootcamp, dizem que os devs saem de lá com super poderes."
          }
        ],
      }
    ]
  };

  render(){
    return this.state.posts.map(post => <Post key={post.id} data={post}/>)
  }  
}

export default PostList;
