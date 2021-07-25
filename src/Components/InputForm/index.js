import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../FormsUI/Textfield'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Button,
  
}
  from '@material-ui/core'
import Select from '../FormsUI/Select'
import listIndication from '../../data/listIndication.json'
//import Autocomplete from '../FormsUI/Autocomplete'
import ImageMarker from '../FormsUI/ImageMarker'
import DateTimePicker from '../FormsUI/DateTimePicker'




const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  }
}))


const iValues = {
  patientID: 'Y3731231',
  lastName: 'qwewq',
  email: '12313@ae.com',
  phone: '69383536',
  indication: 'CT',
  contraindication: 'qweqwe',
  initialAccess: [],
  examDate: ''
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
  indication: Yup.string().required(),
  contraindication: Yup.string().required(),
  initialAccess: Yup.array().min(1) // require an alert for user if no apply is pressed before
})
const onSubmit = (values) => {
  console.log(values)
  // setFieldValue(initialValues, markers)

  //       console.log(markers)
}


function App() {
  const classes = useStyles()
 
  return (

    <Grid container>
      
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...iValues }}
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
                    <DateTimePicker
                      name="examDate"
                      label="Exam Date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="indication"
                      label="Indication"
                      options={listIndication}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="contraindication"
                      label="Contraindications or complicating factors"

                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Autocomplete
                      name="auto"
                      label="AutoComplete"
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <Typography>
                      Vascular access map
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <ImageMarker height="500" name="initialAccess" label="Anatomy map" />     
                  </Grid>

                  <Button type='submit'>Submit</Button>
                </Grid>
           

              </Form>
            </Formik>
          </div>

        </Container>
    </Grid>
    </Grid >

  );
}

export default App;