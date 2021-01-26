import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Posts from './Posts';


const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#EF6C00',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#EF6C00',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

const config ={
	width: "400px",
	height: "500px",
	floating: true, 
  };

class BotForm extends Component {
    render() {
        return (
            <div>
			<ThemeProvider theme={theme}>
            <Chatbot
            steps={[
                {
						id:'q-firstname', 
						message:'What is your first name?', 
						trigger:'firstname',
					},
					{
						id:'firstname', 
						user:true,
						trigger:'q-lastname'
					},
					{
						id:'q-lastname', 
						message:'What is your last name?', 
						trigger:'lastname',
					},
					{
						id:'lastname', 
						user:true,
						trigger:'q-email'
					},
					{
						id:'q-email', 
						message:'Finally. what is you email?', 
						trigger:'email',
					},
					{
						id:'email', 
						user:true,
						trigger:'q-submit'
					},
					{
						id:'q-submit', 
						message:'Do you want to submit your info?', 
						trigger:'submit'
					},
					{
						id:'submit', 
						options:[
						{value:'y', label:'Yes', trigger:'end-message'},
						{value:'n', label:'No', trigger:'no-submit'},
						] 
					},
					{
			            id: 'no-submit',
			            message:'Your information was not submitted. Sorry!.', 
			            end: true,
			         },
                    {
			            id: 'end-message',
			            component: <Posts />,
			            asMessage: true,
			            end: true,
			         },            
				]}
				{...config}
             />
			 </ThemeProvider>
            </div>
        )
    }
}

export default BotForm;
