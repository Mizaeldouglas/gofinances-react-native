import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlihgtCard } from "../../components/HighlightCard";
import { TransactionCardProps,TransctionCard } from "../../components/TranscationCard";


import { 
	Container, 
	Header,
	UserInfo,
	Photo,
	User,
	UserGreeting,
	UserName,
	UserWrapper,
	Icon,
	HighlihgtCards,
	Transactions,
	Title,
	TransactionList,


} from './styles'

export interface DataListProps  extends TransactionCardProps{
	id:string;
}


export function Dashboard(){

	const data: DataListProps[]= [
		{
			id:'1',
			type:'positive',
			title:"Desenvolvimento de site",
			amount:"R$12.000,00",
			category:{
				name:'Vendas',
				icon:'dollar-sign'
			},
			date:"13/04/2020"
		},
		{
			id:'2',
			type:'negative',
			title:"Hambugueria Pizzy",
			amount:"R$ 59,00",
			category:{
				name:'Alimentação',
				icon:'coffee'
			},
			date:"10/04/2020"
		},
		{
			id:'3',
			type:'negative',
			title:"Aluguel do apartamento",
			amount:"R$1.200,00",
			category:{
				name:'Casa',
				icon:'shopping-bag'
			},
			date:"10/04/2020"
		},
		
]


	return(
		<Container>
			<Header >
				<Header >
					<UserWrapper>
						<UserInfo>
							<Photo source={{uri: "https://avatars.githubusercontent.com/u/89351018?v=4"}}/>
							<User>
								<UserGreeting>Ola, </UserGreeting>
								<UserName>Mizael</UserName>
							</User>
						</UserInfo>
						<Icon name="power"/>
					</UserWrapper>
				</Header>
			</Header>
			<HighlihgtCards
				
			>
				<HighlihgtCard type="up" title='Entradas' amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" />
				<HighlihgtCard type="down" title='Saidas' amount="R$ 1.259,00" lastTransaction="Última entrada dia 03 de abril" />
				<HighlihgtCard type="total" title='Total' amount="R$ 19.141,00" lastTransaction="01 á 16 de abril" />
				
			</HighlihgtCards>

			<Transactions>
				<Title>Listagem</Title>
				<TransactionList 
					data={data}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <TransctionCard data={item}/>}
				/>

				
			</Transactions>
			
		</Container>
	)
}
