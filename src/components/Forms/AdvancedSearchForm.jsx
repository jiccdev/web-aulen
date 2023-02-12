import React, { useState, useEffect } from 'react';
import RSelect from '../RSelect/RSelect';
import styles from '../../styles/Forms/AdvancedSearchForm.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const AdvancedSearchForm = ({
  data,
  setProperties,
  getProperties,
  newProperties,
  setNewProperties,
  getSelects,
  selectsList,
  // filters
  getPropertiesByTypeOfProperty,
  getPropertiesByMinAndMaxPrice,
  getPropertiesBySurfaceM2,
}) => {
  const { regions, operationType, typeOfProperty, installmentType } =
    selectsList;
  const [notPropertiesMessage, setNotPropertiesMessage] = useState('');
  const [filtredData, setFiltredData] = useState([]);
  const [filtredDataValue, setFiltredDataValue] = useState({
    typeOfOperation: '',
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
  });

  const onFormSubmit = (ev) => {
    ev.preventDefault();
  };

  // ===== Operation Type =====
  const onOperationTypeChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfOperation: option?.value,
    });
  };

  const getOperationTypeOptions = () =>
    operationType?.map((operationType) => ({
      value: operationType.value,
      label: operationType.name,
    }));
  // ===== Operation Type =====

  // ===== Type of Property =====
  const onTypeOfPropertyChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfProperty: option?.value,
    });
  };

  const getTypeOfPropertyOptions = () =>
    typeOfProperty?.map((typeOfProperty) => ({
      value: typeOfProperty.value,
      label: typeOfProperty.name,
    }));
  // ===== Type of Property =====

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
  };
  // ===== Regions =====

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

  const onCommunesChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      commune: option?.value,
    });
  };

  const onSurfaceChange = (ev) => {
    setFiltredDataValue({
      ...filtredDataValue,
      surface: Number(ev.target.value),
    });
  };

  const onBedroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bedrooms: option?.value,
    });
  };

  const onBathroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bathrooms: option?.value,
    });
  };

  const onParkingLotsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      parkingLots: option?.value,
    });
  };

  useEffect(() => {
    getSelects();
  }, []);

  /** Filters */
  // ===== Filter by Type of Property ✅ =====
  useEffect(() => {
    getPropertiesByTypeOfProperty(5, 5, filtredDataValue?.typeOfProperty);
  }, [filtredDataValue?.typeOfProperty]);

  // ===== Filter by Min and Max price ✅ =====
  useEffect(() => {
    filtredDataValue?.priceFrom || filtredDataValue?.priceUpTo
      ? getPropertiesByMinAndMaxPrice(
          5,
          5,
          filtredDataValue?.priceFrom,
          filtredDataValue?.priceUpTo
        )
      : getProperties(5, 5);
  }, [filtredDataValue?.priceFrom, filtredDataValue?.priceUpTo]);

  // ===== Filter by Surface M2 ✅ =====
  useEffect(() => {
    !filtredDataValue?.surface
      ? getProperties(5, 5)
      : getPropertiesBySurfaceM2(5, 5, filtredDataValue?.surface);
  }, [filtredDataValue.surface]);

  // crea un efecto en que coincidan todos los filtros
  useEffect(() => {
    const filtredData = newProperties.filter((item) => {
      return (
        item.typeOfOperation === filtredDataValue.typeOfOperation &&
        item.typeOfProperty === filtredDataValue.typeOfProperty &&
        item.region === filtredDataValue.region &&
        item.commune === filtredDataValue.commune &&
        item.surface === filtredDataValue.surface &&
        item.priceCLP === filtredDataValue.priceCLP &&
        item.priceUF === filtredDataValue.priceUF &&
        item.priceFrom === filtredDataValue.priceFrom &&
        item.priceUpTo === filtredDataValue.priceUpTo &&
        item.bedrooms === filtredDataValue.bedrooms &&
        item.bathrooms === filtredDataValue.bathrooms &&
        item.parkingLots === filtredDataValue.parkingLots
      );
    });
    setFiltredData(filtredData);
  }, [filtredDataValue, newProperties]);

  console.log('filtredDataValue', filtredDataValue);
  console.log('newProperties', newProperties);

  return (
    <Form className={styles.form} onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de operación</Form.Label>
        <RSelect
          options={getOperationTypeOptions()}
          defaultValue={operationType[0]}
          onChange={onOperationTypeChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Tipo de propiedad</Form.Label>
        <RSelect
          options={getTypeOfPropertyOptions()}
          defaultValue={typeOfProperty[0]}
          onChange={onTypeOfPropertyChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Región</Form.Label>
        <RSelect
          options={getRegionOptions()}
          defaultValue={regions[0]}
          onChange={onRegionsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Comuna</Form.Label>
        <RSelect
          // options={communes}
          // defaultValue={communes[0]}
          onChange={onCommunesChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Superficie</Form.Label>
        <Form.Control
          type="number"
          defaultValue={filtredDataValue?.surface}
          onChange={onSurfaceChange}
          placeholder="Superficie"
          name="surface"
        />
      </Form.Group>

      <Form.Group className="mb-3">
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
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Desde</Form.Label>
            <Form.Control
              type="text"
              onChange={onPriceFromChange}
              defaultValue={filtredDataValue?.priceFrom}
              placeholder="Desde"
              name="from"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Hasta</Form.Label>
            <Form.Control
              type="number"
              onClick={onPriceUpToChange}
              defaultValue={filtredDataValue?.priceUpTo}
              placeholder="Hasta"
              name="to"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Dormitorios</Form.Label>
        <RSelect
          // options={bedrooms}
          // defaultValue={bedrooms[0]}
          onChange={onBedroomsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Baños</Form.Label>
        <RSelect
          // options={bathrooms}
          // defaultValue={bathrooms[0]}
          onChange={onBathroomsChange}
          className={styles.rSelect}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Estacionamientos</Form.Label>
        <RSelect
          // options={parkingLots}
          // defaultValue={parkingLots[0]}
          onChange={onParkingLotsChange}
          className={styles.rSelect}
        />
      </Form.Group>

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