import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from './Components/FormsUI/Textfield'
import Header from './Components/Header/Header'
import {makeStyles} from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography}
  from '@material-ui/core'

  const useStyles = makeStyles((theme) =>({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    }
  }))


  const iValues = {
    patientID: '',
    lastName: '',
    email: '',
    phone: '',
    indication: '',
  }
  const valSchema = Yup.object().shape({
    patientID: Yup.string()
    .matches(/^[A-Z]{1,2}[0-9]{6}[0-9A-F]{1}/, "This is not a valid HKID format")
    .required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Not a valid email format").required("Required"),
    phone: Yup.string()
    .typeError('Please enter a valid phone number')
    .matches(/^1[0-9]{10}$|^[569][0-9]{7}$/, "Enter a valid telphone")
    .required("Required"),
    indication:Yup.string().required()
  })
  const onSubmit = (values) => {
    console.log(values)
  }
function App() {
  const classes = useStyles()
  return (

    <Grid container>
      <Grid item xs={12}>
        <Header />      
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md"> 
          <div className={classes.formWrapper}>
            <Formik
            initialValues={{...iValues}}
            validationSchema={valSchema}
            onSubmit={onSubmit}
            >

              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography>
                      Patient Demographics
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField 
                      name="patientID"
                      label="Paitent ID"
                    />

                  </Grid>
                    
                  <Grid item xs={6}>
                    <TextField 
                          name="lastName"
                          label="Last Name"
                        />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField 
                        name="email"
                        label="Email address"
                      />
                </Grid>
                <Grid item xs={12}>
                <TextField 
                      name="phone"
                      label="Phone number"
                    />
              </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Procedure detail
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                          name="indication"
                          label="Indication"
                        />
                    </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Booking information
                    </Typography>
                  </Grid>
                
                </Grid>

              </Form>
            </Formik>
          </div>
        </Container>      
      </Grid>
    </Grid>

  );
}

export default App;
