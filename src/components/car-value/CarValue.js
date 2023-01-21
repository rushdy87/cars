import { useSelector } from 'react-redux';

const CarValue = () => {
  const totalCost = useSelector(({ cars: { carsList, searchTerm } }) =>
    carsList
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((accumulator, currentValue) => accumulator + currentValue.cost, 0)
  );

  return <div className="car-value">TOTAL COST: ${totalCost}</div>;
};

export default CarValue;
