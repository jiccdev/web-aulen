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
  getSelects,
  selectsList,
  getCommunesByRegion,
  getPropertiesByTypeOfProperty,
  getPropertiesOnFormSubmit,
}) => {
  const { regions, communes, operationType, typeOfProperty, installmentType } =
    selectsList;
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

  const resetForm = () => {
    setFiltredDataValue({
      operation: '',
      typeOfProperty: '',
      region: '',
      commune: '',
      surface: '',
      priceCLP: false,
      priceUF: false,
      priceFrom: 0,
      priceUpTo: 0,
      bedrooms: 0,
      bathrooms: '',
      parkingLots: '',
      installmentType: '',
    });
  };

  // ===== Operation Type =====
  const onOperationTypeChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      operation: option?.label,
    });
  };

  const getOperationTypeOptions = () => {
    if (router.pathname === '/soy-inversionista/unidades-nuevas') {
      const filtredArr = operationType
        ?.filter(
          (operationType) =>
            operationType.value !== 'arriendo' &&
            operationType.value !== 'arriendo_temporal'
        )
        .map((operationType) => ({
          value: operationType.value,
          label: operationType.name,
        }));
      return filtredArr;
    } else {
      const filtredArr2 = operationType.map((operationType) => ({
        value: operationType.value,
        label: operationType.name,
      }));
      return filtredArr2;
    }
  };

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

  // ===== Installation type =====
  const onInstallmentTypeChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      installmentType: option?.label,
    });
  };

  const getInstallmentTypeOptions = () => {
    const filtredArr = installmentType
      ?.filter(
        (installmentType) =>
          installmentType.value !== 'entrega inmediata' ||
          installmentType.name !== 'entrega inmediata'
      )
      .map((installmentType) => ({
        value: installmentType.value,
        label: installmentType.name,
      }));
    return filtredArr;
  };

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

  useEffect(() => {
    getPropertiesByTypeOfProperty(5, 5, filtredDataValue?.typeOfProperty);
  }, [filtredDataValue?.typeOfProperty]);

  const onFormSubmit = (
    realtorId,
    statusId,
    operationType,
    typeOfProperty,
    region,
    commune,
    minPrice,
    maxPrice,
    bathrooms,
    coveredParkingLots,
    surfaceM2,
    bedrooms
  ) => {
    let url = `properties`;
    const _realtorId = `${realtorId}`;
    const _statusId = `${statusId}`;
    const _operationType = operationType.length > 0 ? operationType : false;
    const _typeOfProperty = typeOfProperty.length > 0 ? typeOfProperty : false;
    const _region = region > 0 ? region : false;
    const _commune = commune.length > 0 ? commune : false;
    const _minPrice = minPrice > 0 ? minPrice : false;
    const _maxPrice = maxPrice > 0 ? maxPrice : false;
    const _bathrooms = bathrooms > '0' ? bathrooms : Number('');
    const _coveredParkingLots =
      coveredParkingLots > '0' ? coveredParkingLots : Number('');
    const _surfaceM2 = surfaceM2 > '0' ? surfaceM2 : Number('');
    const _bedrooms = bedrooms > '0' ? bedrooms : Number('');

    console.log(
      url.concat(
        `?realtorId=${_realtorId}&statusId=${_statusId}${
          _operationType ? `&operationType=${_operationType}` : ''
        }${_typeOfProperty ? `&typeOfProperty=${_typeOfProperty}` : ''}${
          _region ? `&region=${_region}` : ''
        }${_commune ? `&commune=${_commune}` : ''}${
          _minPrice ? `&min_price=${_minPrice}` : ''
        }${_maxPrice ? `&max_price=${_maxPrice}` : ''}${
          _bathrooms ? `&bathrooms=${_bathrooms}` : ''
        }${
          _coveredParkingLots
            ? `&covered_parking_lots=${_coveredParkingLots}`
            : ''
        }${_surfaceM2 ? `&surface_m2=${_surfaceM2}` : ''}${
          _bedrooms ? `&bedrooms=${_bedrooms}` : ''
        }`
      )
    );

    return getPropertiesOnFormSubmit(
      realtorId,
      statusId,
      _operationType,
      _typeOfProperty,
      _region,
      _commune,
      _minPrice,
      _maxPrice,
      _bathrooms,
      _coveredParkingLots,
      _surfaceM2,
      _bedrooms
    );
  };

  return (
    <Form className={styles.form}>
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
            type="text"
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

      <Form.Group className="mb-3">
        <Button
          variant="primary"
          className={styles.btnSubmit}
          onClick={() => {
            onFormSubmit(
              5,
              5,
              filtredDataValue?.operation,
              filtredDataValue?.typeOfProperty,
              filtredDataValue?.region,
              filtredDataValue?.commune,
              filtredDataValue?.priceFrom,
              filtredDataValue?.priceUpTo,
              filtredDataValue?.bathrooms,
              filtredDataValue?.parkingLots,
              filtredDataValue?.surface,
              filtredDataValue?.bedrooms
            );
          }}
        >
          Buscar
        </Button>
      </Form.Group>

      <Form.Group className="mb-3">
        <Button
          variant="secondary"
          className={styles.btnSubmit}
          onClick={() => {
            resetForm();
            window.location.reload();
          }}
        >
          Limpiar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AdvancedSearchForm;
