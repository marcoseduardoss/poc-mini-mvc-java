import React, { useState } from "react";
import "./movieEdit.css";
import Api from "./../../../../../api/api";
import useGetMovie from "../../../../../hooks/useGetMovie";
import createBrowserHistory from 'history/createBrowserHistory';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import useAddMovieForm from "../../../../../hooks/useAddMovieForm";

const history = createBrowserHistory({ forceRefresh: true });
//history.push("/"); 

const MovieEdit = (props) => {
  

  const [movieIn, isLoading, error, fetchMovie] =  useGetMovie(props.id);
  const [ {values, loading}, handleChange, handleSubmit, _fetchMovie] = useAddMovieForm();

 /* 
  const [title, setTitle] = useState(movieIn.title );
  const [synopsis, setSynopsis] = useState(movieIn.synopsis );
  const [protagonists, setProtagonists] = useState(movieIn.protagonists );
  const [producer, setProducer] = useState(movieIn.producer );
  const [year, setYear] = useState(movieIn.year );
  const [thumbnail, setThumbnail] = useState(movieIn.thumbnail );
  const [thumbnail, setThumbnail] = useState('');
*/

  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [protagonists, setProtagonists] = useState('');
  const [producer, setProducer] = useState('');
  const [year, setYear] = useState('');

  const enviar = () => {
    try {

      let form = document.forms[0]; 
      let input = form.elements; 

     let movie = {
        "protagonists": input.protagonists.value,
        "thumbnail"   : input.thumbnail.value,
        "producer"    : input.producer.value,  
        "synopsis"    : input.synopsis.value, 
        "title"       : input.title.value,
        "year"        : input.year.value
      }

      let saved = Api.updateMovie(props.id, movie);

      alert('Edição realizada com sucesso!')

      history.push("/");

    } catch (e) {
      alert(e.message);
    }
  }
  
  return (
    <div align="center">

      
      <form id="my" onSubmit={handleSubmit(enviar)}  >

          <h1>Alteração de Filme</h1>
  
          <div align="left" style={{paddingLeft: "50px"}}> 

          {props.id}

          <br /> <br />

          <InputText name="title"
            type="text"
            defaultValue={movieIn.title}
            size={30}            
            placeholder="Título"
            onChange={handleChange}
            />

          <br /><br />

          <InputTextarea name="synopsis"
            rows={5} cols={80}
            autoResize={true}
            defaultValue={movieIn.synopsis}
            placeholder="Sinopse do filme"
            onChange={handleChange}
            ></InputTextarea>

          <br /><br />

          <InputText name="protagonists"
            defaultValue={movieIn.protagonists}
            type="text"
            size={30}
            placeholder="Protagonistas"
            onChange={handleChange}
            />

          <br /><br />


          <InputText name="thumbnail"
            defaultValue={movieIn.thumbnail}
            type="text"
            size={30}
            placeholder="URL da imagem"
            onChange={handleChange}
            />

          <br /><br />
          

          <InputText name="producer"
           defaultValue={movieIn.producer}
            type="text"
            size={30}
            placeholder="Produtor"
            onChange={handleChange}
            />

          <br /><br />

          <InputText name="year"
            defaultValue={movieIn.year}
            type="text"
            size={30}
            placeholder="Ano"
            onChange={handleChange}
            />


          <br /><br />

          
          <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
          
          <br /><br />

        </div>

      </form>
    </div>
  );
};

export default MovieEdit;