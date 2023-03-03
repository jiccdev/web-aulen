import React, { useState, useEffect, useContext } from 'react';
import RSelect from '../RSelect/RSelect';
import styles from '../../styles/Forms/AdvancedSearchForm.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdvancedSearchForm = ({
  router,
  getProperties,
  getSelects,
  selectsList,
  getCommunesByRegion,
  getPropertiesByTypeOfProperty,
  getPropertiesByMinAndMaxPrice,
  getPropertiesBySurfaceM2,
  getPropertiesByBedrooms,
  getPropertiesByBathrooms,
  getPropertiesByParkingLotsCovered,
  getPropertiesByOperationType,
  getPropertiesByRegionAndCommune,
  getPropertiesByInstallmentType,
  getPropertiesOnFormSubmit,
}) => {
  const { regions, communes, operationType, typeOfProperty, installmentType } =
    selectsList;
  const [notPropertiesMessage, setNotPropertiesMessage] = useState('');
  const [filtredData, setFiltredData] = useState([]);
  const [filtredDataValue, setFiltredDataValue] = useState({
    operation: '',
    typeOfProperty: '',
    region: '',
    commune: '',
    surface: '',
    priceCLP: false,
    priceUF: false,
    priceFrom: 0,
    priceUpTo: 0,
    bedrooms: '',
    bathrooms: '',
    parkingLots: '',
    installmentType: '',
  });

  console.log(router.pathname);

  // ===== Operation Type =====
  const onOperationTypeChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      operation: option?.label,
    });
  };

  const getOperationTypeOptions = () =>
    operationType?.map((operationType) => ({
      value: operationType.value,
      label: operationType.name,
    }));
  // ===== Operation Type =====

  // ===== Type of Property =====
  const getTypeOfPropertyOptions = () =>
    typeOfProperty?.map((typeOfProperty) => ({
      value: typeOfProperty.value,
      label: typeOfProperty.name,
    }));

  const onTypeOfPropertyChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfProperty: option?.value,
    });
  };
  // ===== Type of Property =====

  // ===== Installation type =====
  const onInstallmentTypeChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      installmentType: option?.label,
    });
  };

  const getInstallmentTypeOptions = () =>
    installmentType?.map((installmentType) => ({
      value: installmentType.value,
      label: installmentType.name,
    }));
  // ===== Installation type =====

  // ===== Regions =====
  const getRegionOptions = () =>
    regions?.map((region) => ({
      value: region.id,
      label: region.name,
    }));

  const onRegionsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      region: option?.value,
    });

    console.log(filtredDataValue?.region);
  };
  // ===== Regions =====

  // ===== Communes =====
  const getCommunesOptions = () =>
    communes?.map((comune) => ({
      value: comune.id,
      label: comune.name,
    }));

  const onCommunesChange = (comune) => {
    setFiltredDataValue({
      ...filtredDataValue,
      commune: comune?.label,
    });
  };
  // ===== Communes =====

  // ===== From Price =====
  const onPriceFromChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      priceFrom: Number(ev.target.value),
    });
  };

  // ===== From Price Up To =====
  const onPriceUpToChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      priceUpTo: Number(ev.target.value),
    });
  };

  const onSurfaceChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      surface: ev.target.value,
    });
  };

  const onBedroomsChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bedrooms: ev.target.value,
    });
  };

  const onBathroomsChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bathrooms: ev.target.value,
    });
  };

  const onParkingLotsChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      parkingLots: ev.target.value,
    });
  };

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(filtredDataValue?.region);
  }, [filtredDataValue?.region]);

  // Regions & Communes
  useEffect(() => {
    !filtredDataValue.commune && !filtredDataValue.region
      ? getProperties(5, 5)
      : getPropertiesByRegionAndCommune(
          5,
          5,
          filtredDataValue.region,
          filtredDataValue.commune
        );
  }, [filtredDataValue.commune]);

  /** Filters */
  // ===== Filter by Type of Property ✅ =====
  useEffect(() => {
    getPropertiesByTypeOfProperty(5, 5, filtredDataValue?.typeOfProperty);
  }, [filtredDataValue?.typeOfProperty]);

  // ===== Filter by Min and Max price ✅ =====
  useEffect(() => {
    filtredDataValue?.priceFrom && filtredDataValue?.priceUpTo
      ? getPropertiesByMinAndMaxPrice(
          5,
          5,
          filtredDataValue?.priceFrom,
          filtredDataValue?.priceUpTo
        )
      : getProperties(5, 5);
  }, [filtredDataValue?.priceUpTo]);

  // ===== Filter by Surface M2 ✅ =====
  useEffect(() => {
    !filtredDataValue?.surface
      ? getProperties(5, 5)
      : getPropertiesBySurfaceM2(5, 5, filtredDataValue?.surface);
  }, [filtredDataValue?.surface]);

  // ===== Filter by Bedrooms ✅ =====
  useEffect(() => {
    !filtredDataValue.bedrooms
      ? getProperties(5, 5)
      : getPropertiesByBedrooms(5, 5, filtredDataValue?.bedrooms);
  }, [filtredDataValue.bedrooms]);

  // ===== Filter by Bathrooms ✅ =====
  useEffect(() => {
    !filtredDataValue.bathrooms
      ? getProperties(5, 5)
      : getPropertiesByBathrooms(5, 5, filtredDataValue.bathrooms);
  }, [filtredDataValue.bathrooms]);

  // ===== Filter by Parking Lots (covered) ✅ =====
  useEffect(() => {
    !filtredDataValue.parkingLots
      ? getProperties(5, 5)
      : getPropertiesByParkingLotsCovered(5, 5, filtredDataValue.parkingLots);
  }, [filtredDataValue.parkingLots]);

  useEffect(() => {
    !filtredDataValue.operation
      ? getProperties(5, 5)
      : getPropertiesByOperationType(5, 5, filtredDataValue.operation);
  }, [filtredDataValue.operation]);

  useEffect(() => {
    !filtredDataValue.installmentType
      ? getProperties(5, 5)
      : getPropertiesByInstallmentType(5, 5, filtredDataValue.installmentType);
  }, [filtredDataValue.installmentType]);

  // onform submit
  const onFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <Form className={styles.form} onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de operación</Form.Label>
        <RSelect
          options={getOperationTypeOptions()}
          defaultValue={operationType[0]}
          onChange={onOperationTypeChange}
          className={styles.rSelect}
          placeholder="Seleccionar"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de propiedad</Form.Label>
        <RSelect
          options={getTypeOfPropertyOptions()}
          defaultValue={typeOfProperty[0]}
          onChange={onTypeOfPropertyChange}
          className={styles.rSelect}
          placeholder="Seleccionar"
        />
      </Form.Group>

      {router.pathname === '/propiedades' ? null : (
        <Form.Group className="mb-3">
          <Form.Label className={styles.label}>Estado de propiedad</Form.Label>
          <RSelect
            options={getInstallmentTypeOptions()}
            defaultValue={installmentType[0]}
            onChange={onInstallmentTypeChange}
            className={styles.rSelect}
            placeholder="Seleccionar"
          />
        </Form.Group>
      )}

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Región</Form.Label>
        <RSelect
          options={getRegionOptions()}
          defaultValue={regions[0]}
          onChange={onRegionsChange}
          className={styles.rSelect}
          placeholder="Seleccionar"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Comuna</Form.Label>
        <RSelect
          options={getCommunesOptions()}
          defaultValue={communes[0]}
          onChange={onCommunesChange}
          className={styles.rSelect}
          placeholder="Seleccionar"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Superficie</Form.Label>
        <Form.Control
          type="text"
          defaultValue={filtredDataValue?.surface}
          onChange={onSurfaceChange}
          placeholder="Superficie"
          name={filtredDataValue.surface}
        />
      </Form.Group>

      {/* EN DESARROLLO ❌ */}
      {/* <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Label className={styles.label}>Precio</Form.Label>
          </Col>
          <Col>
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="price"
                className={styles.radio}
              />
              <Form.Check.Label className={styles.label}>
                Pesos
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <Col>
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="price"
                className={styles.radio}
              />
              <Form.Check.Label className={styles.label}>UF</Form.Check.Label>
            </Form.Check>
          </Col>
        </Row>
      </Form.Group> */}

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Desde</Form.Label>
            <Form.Control
              type="number"
              onChange={onPriceFromChange}
              defaultValue={filtredDataValue?.priceFrom}
              placeholder={filtredDataValue?.priceFrom}
              name={filtredDataValue?.priceFrom}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Hasta</Form.Label>
            <Form.Control
              type="number"
              onChange={onPriceUpToChange}
              defaultValue={filtredDataValue?.priceUpTo}
              placeholder="Hasta"
              name={filtredDataValue?.priceUpTo}
            />
          </Form.Group>
        </Col>
      </Row>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label className={styles.label}>Dormitorios</Form.Label>
          <Form.Control
            type="number"
            onChange={onBedroomsChange}
            defaultValue={filtredDataValue.bedrooms}
            placeholder="Dormitorios"
            name={filtredDataValue.bedrooms}
          />
        </Form.Group>
      </Col>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label className={styles.label}>Baños</Form.Label>
          <Form.Control
            type="text"
            onChange={onBathroomsChange}
            defaultValue={filtredDataValue.bathrooms}
            placeholder="Baños"
            name={filtredDataValue.bathrooms}
          />
        </Form.Group>
      </Col>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label className={styles.label}>Estacionamientos</Form.Label>
          <Form.Control
            type="text"
            onChange={onParkingLotsChange}
            defaultValue={filtredDataValue.parkingLots}
            placeholder="Estacionamientos"
            name={filtredDataValue.parkingLots}
          />
        </Form.Group>
      </Col>

      {/* En desarrollo ❌ */}
      {/* <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Dormitorios</Form.Label>
        <RSelect
          options={bedrooms}
          defaultValue={bedrooms[0]}
          onChange={onBedroomsChange}
          className={styles.rSelect}
        />
      </Form.Group> */}

      {/* En desarrollo ❌ */}
      {/* <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Baños</Form.Label>
        <RSelect
          options={bathrooms}
          defaultValue={bathrooms[0]}
          onChange={onBathroomsChange}
          className={styles.rSelect}
        />
      </Form.Group> */}

      {/* En desarrollo ❌ */}
      {/* <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Estacionamientos</Form.Label>
        <RSelect
          options={parkingLots}
          defaultValue={parkingLots[0]}
          onChange={onParkingLotsChange}
          className={styles.rSelect}
        />
      </Form.Group> */}

      <Form.Group className="mb-3">
        <Button variant="primary" type="submit" className={styles.btnSubmit}>
          Buscar
        </Button>
      </Form.Group>

      {/* <Form.Group className="mb-3">
        {notPropertiesMessage && (
          <Alert variant="danger">{notPropertiesMessage}</Alert>
        )}
      </Form.Group> */}
    </Form>
  );
};

export default AdvancedSearchForm;
