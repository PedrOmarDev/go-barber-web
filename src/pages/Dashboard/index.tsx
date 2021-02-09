import React from 'react'

import {
	Calendar,
	Container,
	Content,
	Header,
	HeaderContent,
	NextAppointment,
	Profile,
	Schedule,
} from './styles'

import logoImg from '../../assets/logo.svg'
import { FiClock, FiPower } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
	const { signOut, user } = useAuth()

	return (
		<Container>
			<Header>
				<HeaderContent>
					<img src={logoImg} alt="GoBarber Logo" />

					<Profile>
						<img src={user.avatar_url} alt={user.name} />

						<div>
							<span>Bem-vindo,</span>
							<strong>{user.name}</strong>
						</div>
					</Profile>

					<button type="button" onClick={signOut}>
						<FiPower />
					</button>
				</HeaderContent>
			</Header>

			<Content>
				<Schedule>
					<h1>Horários Agendados</h1>
					<p>
						<span>Hoje</span>
						<span>Dia 06</span>
						<span>Segunda-feira</span>
					</p>

					<NextAppointment>
						<strong>Atendimento a seguir</strong>
						<div>
							<img
								src="https://avatars.githubusercontent.com/u/38149050?s=460&u=ba2f45e5b96165c4b33752b36df63ca20d68b783&v=4"
								alt="Pedro Omar Neto"
							/>

							<strong>Pedro Omar Neto</strong>
							<span>
								<FiClock />
								09:00
							</span>
						</div>
					</NextAppointment>
				</Schedule>
				<Calendar />
			</Content>
		</Container>
	)
}

export default Dashboard
