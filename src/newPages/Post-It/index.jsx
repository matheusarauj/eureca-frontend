import React from 'react';

import HeaderHome from '../../newComponents/Home/Header'
import TitleHome from '../../newComponents/Home/Title'

import './style.css'



const PostIt = () => {
    return(
        <React.Fragment>
            <div className ={"main-container-postit"}>
                <div className ={"header-title-container"}> 
                    <HeaderHome/>
                    <TitleHome/>
                </div>
                    <div className ={"postit-content"}>
                        <div className ={"postit-container"}>
                            <div className ={"postit-container-title"}>
                                <p>POST IT</p>
                            </div>
                            <div className={'postit-interactive'}>
                                <div className={'todo-header'}>
                                    <input type='checkbox'/>
                                    <button>EXCLUIR</button>
                                    <hr></hr>
                                </div>
                                <div className={'todo-list'}>
                                    <div class ='do'>
                                        <input type='checkbox' id='do1'></input>
                                        <label for ='do1'>
                                            <span class='label'> Alunos para reunião - alunos que estão com determinadas pendências </span>
                                        </label>
                                    </div>
                                    <div class ='do'>
                                        <input type='checkbox' id='do2'></input>
                                        <label for ='do2'>
                                            <span class='label'> Alunos para reunião - alunos que estão com determinadas pendências</span>
                                        </label>
                                    </div>
                                    <div class ='do'>
                                        <input type='checkbox' id='do3'></input>
                                        <label for ='do3'>
                                            <span class='label'> Alunos para reunião - alunos que estão com determinadas pendências</span>
                                        </label>
                                    </div>
                                    <div class ='do'>
                                        <input type='checkbox' id='do4'></input>
                                        <label for ='do4'>
                                            <span class='label'> Alunos para reunião - alunos que estão com determinadas pendências </span>
                                        </label>
                                    </div>  
                                    <div class ='do'>
                                        <input type='checkbox' id='do5'></input>
                                        <label for ='do5'>
                                            <span class='label'> Alunos para reunião - alunos que estão com determinadas pendências</span>
                                        </label>
                                    </div>        
                                    
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </React.Fragment>
    )   
    
}
export default PostIt;