import React, { useState, useEffect } from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import ExchangeRateServices from '@/services/ExchangeRateServices';
import { parseToCLPCurrency, clpToUf } from '@/utils';

const styles = StyleSheet.create({
  page: { backgroundColor: 'white' },
  section: { color: '#000', textAlign: 'center', margin: 30 },
  mainSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  secondSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoImg: {
    height: '40px',
    width: '200px',
    objectFit: 'center',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  lightFont: {
    fontWeight: 'light',
    color: '#6b7280',
  },
  containerPharagraph: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  lightFontSm: {
    fontSize: 12,
    fontWeight: 'light',
    color: '#6b7280',
  },
  darkFontSm: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightFontXl: {
    fontSize: 11,
    fontWeight: 'light',
    color: '#ffffff',
    borderRadius: '20px',
    padding: '3px 10px',
    backgroundColor: '#f47f2b',
    border: 'none',
},

  darkFont2Xl: {
    fontSize: 12,
    fontWeight: 1,
    color: '#111827',
    margin: '6px 0px',
  },

  darkFont3Xl: {
    fontSize: 14,
    fontWeight: 1,
    color: '#111827',
    margin: '6px 0px',
  },

  topInfoDetail: {
    marginRight: 10,
    fontSize: 10,
  },
  rightInfoDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '40%',
  },
  image: {
    height: '200px',
    width: 'auto',
  },
  containerPropertiesInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '45%',
    marginTop: '10px',
    margin: '4px',
    gap: '2px'
},

  subContainerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subContainerInfoDown: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '10px',
  },
  corredorContainerInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5px',
  },
  corredorContainerBlocks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '10px',
  },
  corredorContainerBlocksLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '10px',
    marginLeft: '10px',
    gap: '16px'
  },
  corredorBlockText: {
    fontSize: '10px',
  },
  primaryColor: {
    color: '#E85512',
    fontWeight: 'extrabold',
  },

  colorCod: {
    color: '#311951',
  },



  blockUrlProperty: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '6px 0px',
    fontSize: 8,
    backgroundColor: '#311951',
    borderRadius: '10px',
    padding: '4px 6px',
    color: '#ffffff',
    border: 'none',
},




});

const VistaPdf = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));

      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      throw error.response;
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.header}>
            <Image
              src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683298180/aulen/LOGO-AULEN-PROPIEDADES_mscv6o.png"
              alt="img-pdf"
              style={styles.logoImg}
            />
          </View>

          <View style={styles.corredorContainerInfo}>
            <View style={styles.corredorContainerBlocks}>
              <Text style={styles.corredorBlockText}>Datos de corredor:</Text>
              <Text style={styles.corredorBlockText}>Mauro Regna</Text>
              <Text style={styles.corredorBlockText}>Rut: 27651553-5</Text>
              <Text style={styles.corredorBlockText}>mauro.regna@unne.cl</Text>
              <Text style={styles.corredorBlockText}>
                F.: +54 9 11 3241-9458
              </Text>
            </View>
            <View style={styles.corredorContainerBlocksLeft}>
              <Text style={styles.colorCod}>Cód: {property?.id || 0}</Text>
              <Text style={styles.darkFont2Xl}>
                  UF: {clpToUf(property?.price || 0, ufCurrentValue)} / CLP:{' '}
                  {parseToCLPCurrency(property?.price || 0)}
              </Text>  
            
            </View>
          </View>

          <View style={styles.mainSection}>
            <View>
              <Image
                src={
                  property?.images?.[0] ??
                  property?.images?.[1] ??
                  property?.images?.[2]
                }
                style={styles.image}
              />
            </View>

            <View style={styles.rightInfoDetail}>
              <View style={styles.containerPharagraph}>
                <Text style={styles.lightFontXl}>
                  {property?.operation} {property?.types?.[0]}
                </Text>
 
                
                <Text style={styles.darkFont3Xl}>
                    {property?.title || 'Sin titulo registrado'}
                </Text>

                <View style={styles.containerPropertiesInfo}>  
                  <View style={styles.subContainerInfo}>
                    <Text style={styles.darkFontSm}>
                      <Image
                        src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683053043/unne-media/icons/metro-cuadrado_1_zv7akg.png"
                        alt="icon-surfaceM2"
                        style={styles.icon}
                      />{' '}
                      {property?.surface_m2 || 0} m2
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.darkFontSm}>
                      <Image
                        src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683053647/unne-media/icons/ducha_zfwfp2.png"
                        alt="icon-bathrooms"
                        style={styles.icon}
                      />{' '}
                      {property?.bathrooms || 0}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.darkFontSm}>
                      <Image
                        src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683053647/unne-media/icons/cuarto_vpkwwf.png"
                        alt="icon-bedrooms"
                        style={styles.icon}
                      />{' '}
                      {property?.bedrooms || 0}
                    </Text>
                  </View>


                  <View>
                    <Text style={styles.darkFontSm}>
                      <Image
                        src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683053647/unne-media/icons/servicio-de-auto_t10nvq.png"
                        alt="img-pdf"
                      />{' '}
                      {property?.coveredParkingLots || 0}
                    </Text>
                  </View>


                </View>

              </View>



              <View style={styles.blockUrlProperty}>
                <Text style={styles}>
                  <Image
                    src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1683054033/unne-media/icons/globo_uqsbnj.png"
                    alt="img-pdf"
                  />{' '}
                  {`https://unne.pa/propiedades/${property?.id}/?statusId=1&companyId=15`}
                </Text>
              </View>

            </View>
          </View>
          <View style={styles.secondSection}>
            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Titulo</Text>
              <Text style={styles.darkFontSm}>
                {property?.title || 'Titulo no registrado'}
              </Text>
            </View>

            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Descripción</Text>
              <Text style={styles.darkFontSm}>
                {property?.description || 'Descripción no registrada'}
              </Text>
            </View>

            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Ubicación</Text>
              <Text style={styles.darkFontSm}>
                {property?.address || 'Ubicación no registrada'},{' '}
                {property?.commune || 'Comuna no registrada'}
                {property?.city || 'Ciudad no registrada'}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default VistaPdf;
