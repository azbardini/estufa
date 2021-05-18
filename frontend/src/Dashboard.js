import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { toastConfig } from 'react-simple-toasts'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import useStyles from './style/DashboardStyles'
import api from './services/Api'

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const [tab, setTab] = useState('regagem')
  const [agenda, setAgenda] = useState([])
  const [relatorios, setRelatorios] = useState([])
  toastConfig({
    time: 2000,
    position: 'right'
    
  });

  useEffect(() => {
    api.get('regas').then(response => {
      if (response?.data) {
        setAgenda(response?.data)
      }
    })

    api.get('relatorios').then(response => {
      if (response?.data) {
        setRelatorios(Object.values(response?.data).reverse())
      }
    })

    toast('Bem vindo! Estamos carregando sua agenda...')
  }, [])

  const updateAgenda = (day, hour) => {
    const newAgenda = [...agenda]
    newAgenda[day][hour] = agenda[day][hour] === 'on' ? 'off' : 'on'
    setAgenda(newAgenda)
  }

  const sendRegas = () => {
    api.post('regas', { agenda }).then(response => {
      if (response?.status === 200) {
        toast('Agenda salva!')
      } else {
        toast('Erro ao salvar agenda :(')
      }
    })
  }

  async function logout() {
    history.push('/');
    toast('Até logo!')
  }

  return (<React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
      <AppBar position="relative" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h3" variant="h4" align="left">
            GreenHouse Sensors
          </Typography>
          <Button className={classes.transparentButton} onClick={() => logout()}>
            <ExitToAppIcon className={classes.icon} />
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.title}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h4" align="center" color="textPrimary">Dashboard</Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={2} justify="center">
              <Grid item><Button variant="contained" onClick={() => setTab('regagem')}>Regagem</Button></Grid>
              <Grid item><Button variant="contained" onClick={() => setTab('relatorios')}>Relatórios</Button></Grid>
            </Grid>
          </Container>
        </div>
        {tab === 'regagem' &&
          <><br></br><br></br>
            <Container className={classes.flexCalendar} maxWidth="md">
              <Grid container spacing={2} justify="space-between">
                <Grid item><Typography component="h4" variant="h4">Horários de Regagem</Typography></Grid>
                <Grid item>
                  <Button className={classes.spaceLeft} variant="contained" onClick={() => sendRegas()} >Salvar</Button>
                </Grid>
              </Grid>
            </Container>
            <br></br>
            <Container className={classes.flexCalendar} maxWidth="md">
              {agenda.map((day, dayIndex) =>
                <div key={`semana_${dayIndex}`} className={classes.calendarColumn}>
                  {weekDays[dayIndex]}
                </div>
              )}
            </Container>
            <Container className={classes.flexCalendar} maxWidth="md">
              {agenda.map((day, dayIndex) =>
                <div key={`dia_${dayIndex}`} className={classes.calendarColumn}>
                  {day.map((hour, hourIndex) =>
                    <div key={`hora_${hourIndex}`} className={agenda[dayIndex][hourIndex] === 'on' ? classes.greenCalendarRow : classes.redCalendarRow} onClick={() => updateAgenda(dayIndex, hourIndex)}>
                      {`${hourIndex}h: ${agenda[dayIndex][hourIndex].toUpperCase()}`}
                    </div>
                  )}
                </div>
              )}
            </Container>
          </>
        }

        {tab === 'relatorios' &&
          <Container className={classes.cardGrid} maxWidth="md">
            {relatorios.map(relatorio =>
              <div className={classes.relatorio} key={`relatorio_${relatorio}`}>
                <Grid container spacing={2} justify="space-between">
                  <Grid item><Typography component="h4" variant="h4">{new Date(relatorio.data).toISOString()}</Typography></Grid>
                </Grid>
                <Grid container spacing={4} >
                  <Typography className={classes.cardGrid} component="h5" variant="h5">Iluminação</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Cortina</TableCell>
                        <TableCell>Luminosidade</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{relatorio.iluminacao.cortina}</TableCell>
                        <TableCell>{relatorio.iluminacao.luminosidade}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Typography className={classes.cardGrid} component="h5" variant="h5">Regagem</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Regador</TableCell>
                        <TableCell>Umidade</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{relatorio.regagem.regador}</TableCell>
                        <TableCell>{relatorio.regagem.umidade}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Typography className={classes.cardGrid} component="h5" variant="h5">Temperatura</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Ar Condicionado</TableCell>
                        <TableCell>Termômetro</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{relatorio.ventilacao.arCondicionado}</TableCell>
                        <TableCell>{relatorio.ventilacao.termometro}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Typography className={classes.cardGrid} component="h5" variant="h5">Imagem</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Cor das Plantas</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Fogo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{relatorio.visao.processamento.corPlantas}</TableCell>
                        <TableCell>{relatorio.visao.processamento.quantidadeDePlantas}</TableCell>
                        <TableCell>{relatorio.visao.processamento.fogo}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </div>
            )}
          </Container>
        }


      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center">
          GreenHouse Sensors
        </Typography>
      </footer>
    </div>
  </React.Fragment>
  );
}