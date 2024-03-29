import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import RSelect from '../RSelect/RSelect';
import SpinnerComponent from '../Spinner/SpinnerComponent';
import {
  parkingLotsList,
  bedroomsList,
  bathroomsList,
} from '../../api/data/selectsProperties';
import { icons } from '../Icons';
import styles from '../../styles/Forms/AdvancedSearchForm.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdvancedSearchForm = ({
  router,
  totalItems,
  getSelects,
  selectsList,
  getCommunesByRegion,
  getPropertiesOnFormSubmit,
  cargando,
  setCargando,
}) => {
  const [loading, setLoading] = useState(false);
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
  const { regions, communes, operationType, typeOfProperty, installmentType } =
    selectsList;
  const { CgSearchFound, GoSearch, IoTrashOutline, MdHomeWork } = icons;

  const handleClickUpd = (e) => {
    e.preventDefault();
    router.push(router.asPath);
  };

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
  const getTypeOfPropertyOptions = () => {
    if (router.pathname === '/soy-inversionista/unidades-nuevas') {
      const filtredArr = typeOfProperty
        ?.filter(
          (type) =>
            type.value !== 'casa' &&
            type.value !== 'parcela' &&
            type.value !== 'terreno' &&
            type.value !== 'industrial' &&
            type.value !== 'local' &&
            type.value !== 'oficina' &&
            type.value !== 'sitio' &&
            type.value !== 'Terreno En Construccion' &&
            type.value !== 'agrícola'
        )
        .map((type) => ({
          value: type.value,
          label: type.name,
        }));
      return filtredArr;
    } else {
      const filtredArr2 = typeOfProperty?.map((type) => ({
        value: type.value,
        label: type.name,
      }));
      return filtredArr2;
    }

    // typeOfProperty?.map((typeOfProperty) => ({
    //   value: typeOfProperty.value,
    //   label: typeOfProperty.name,
    // }));
  };

  const onTypeOfPropertyChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      typeOfProperty: option?.value,
    });
  };

  const getParkingLotsOptions = () =>
    parkingLotsList?.map((parkingLots) => ({
      value: parkingLots.value,
      label: parkingLots.label,
    }));

  const onParkingLotsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      parkingLots: option?.value,
    });
  };

  const getBedroomsOptions = () =>
    bedroomsList?.map((bedroom) => ({
      value: bedroom.value,
      label: bedroom.label,
    }));

  const onBedroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bedrooms: option?.value,
    });
  };

  const getBathroomsOptions = () =>
    bathroomsList?.map((bathroom) => ({
      value: bathroom.value,
      label: bathroom.label,
    }));

  const onBathroomsChange = (option) => {
    setFiltredDataValue({
      ...filtredDataValue,
      bathrooms: option?.value,
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

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(filtredDataValue?.region);
  }, [filtredDataValue?.region]);

  const onFormSubmit = (
    statusId,
    companyId,
    operationType,
    typeOfProperty,
    region,
    commune,
    minPrice,
    maxPrice,
    coveredParkingLots,
    bedrooms,
    surfaceM2,
    bathrooms,
    installmentType
  ) => {
    return getPropertiesOnFormSubmit(
      statusId,
      companyId,
      operationType,
      typeOfProperty,
      region,
      commune,
      minPrice,
      maxPrice,
      coveredParkingLots,
      bedrooms,
      surfaceM2,
      bathrooms,
      installmentType
    );
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3600);
    }
  }, [loading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Fragment>
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
            <Form.Label className={styles.label}>
              Estado de propiedad
            </Form.Label>
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
                placeholder={filtredDataValue?.priceUpTo}
                name={filtredDataValue?.priceUpTo}
              />
            </Form.Group>
          </Col>
        </Row>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Dormitorios</Form.Label>
            <RSelect
              options={getBedroomsOptions()}
              defaultValue={bedroomsList[0]}
              onChange={onBedroomsChange}
              className={styles.rSelect}
              placeholder="Seleccionar"
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Baños</Form.Label>
            <RSelect
              options={getBathroomsOptions()}
              defaultValue={bathroomsList[0]}
              onChange={onBathroomsChange}
              className={styles.rSelect}
              placeholder="Seleccionar"
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Estacionamientos</Form.Label>
            <RSelect
              options={getParkingLotsOptions()}
              defaultValue={parkingLotsList[0]}
              onChange={onParkingLotsChange}
              className={styles.rSelect}
              placeholder="Seleccionar"
            />
          </Form.Group>
        </Col>

        <Form.Group className="mb-3">
          <Button
            variant="primary"
            className={styles.btnSubmit}
            onClick={() => {
              handleClick();
              onFormSubmit(
                1,
                15,
                filtredDataValue?.operation,
                filtredDataValue?.typeOfProperty,
                filtredDataValue?.region,
                filtredDataValue?.commune,
                filtredDataValue?.priceFrom,
                filtredDataValue?.priceUpTo,
                filtredDataValue?.parkingLots,
                filtredDataValue?.bedrooms,
                filtredDataValue?.surface,
                filtredDataValue?.bathrooms,
                filtredDataValue?.installmentType
              );
              setCargando(true);

              setTimeout(() => {
                setCargando(false);
              }, 2700);
            }}
          >
            {cargando ? (
              <span
                style={{
                  display: 'flex',
                }}
              >
                <SpinnerComponent size="md" />
              </span>
            ) : (
              <span>
                Buscar
                <GoSearch className={styles.btnIcon} />
              </span>
            )}
          </Button>
        </Form.Group>

        <Form.Group className="mb-3">
          <Link
            className={styles.btnSubmitClean}
            href={router.pathname}
            as={router.pathname}
            onClick={() => {
              window.location.reload();
            }}
          >
            Limpiar
            <IoTrashOutline className={styles.btnIcon} />
          </Link>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

export default AdvancedSearchForm;
