import * as React from "react";
import {
  getBrands,
  getCountries,
  getStages,
  getSubBrands
} from "src/pages/organizationList";
import { SelectorOutlined } from "./SelectorOutlined.component";

interface IState {
  country: string;
  brand: string;
  subBrand: string;
  stage: string;
}

interface IProps {
  displayBrand: boolean;
  displaySubBrand: boolean;
  displayStage: boolean;
  displayCountry: boolean;
  defaultGroup?: string;
}

export class OrganizationSelector extends React.Component<IProps, IState> {
  public static defaultProps = {
    displayBrand: true,
    displaySubBrand: true,
    displayStage: true,
    displayCountry: true
  };
  constructor(props: any) {
    super(props);
    const country = getCountries(this.props.defaultGroup)[0];
    const brand = getBrands(country)[0];
    const subBrand = getSubBrands(country, brand)[0];
    const stage = getStages(country, brand, subBrand)[0];
    this.state = {
      country,
      brand,
      subBrand,
      stage
    };
  }

  public onCountryChange = (country: string) => {
    const brand = getBrands(country)[0];
    const subBrand = getSubBrands(country, brand)[0];
    const stage = getStages(country, brand, subBrand)[0];
    this.setState({
      country,
      brand,
      subBrand,
      stage
    });
  };
  public onBrandChange = (brand: string) => {
    const country = this.state.country;
    const subBrand = getSubBrands(country, brand)[0];
    const stage = getStages(country, brand, subBrand)[0];
    this.setState({
      country,
      brand,
      subBrand,
      stage
    });
  };
  public onSubBrandChange = (subBrand: string) => {
    const country = this.state.country;
    const brand = this.state.brand;
    const stage = getStages(country, brand, subBrand)[0];
    this.setState({
      country,
      brand,
      subBrand,
      stage
    });
  };

  public render() {
    return (
      <div>
        {this.props.displayCountry && (
          <SelectorOutlined
            onChange={this.onCountryChange}
            defaultDisplayedValue={this.state.country}
            valueList={getCountries()}
          />
        )}
        {this.props.displayBrand && (
          <SelectorOutlined
            onChange={this.onBrandChange}
            defaultDisplayedValue={this.state.brand}
            valueList={getBrands(this.state.country)}
          />
        )}
        {this.props.displayBrand && this.props.displaySubBrand && (
          <SelectorOutlined
            onChange={this.onSubBrandChange}
            defaultDisplayedValue={this.state.subBrand}
            valueList={getSubBrands(this.state.country, this.state.brand)}
          />
        )}
        {this.props.displayBrand &&
          this.props.displaySubBrand &&
          this.props.displayStage && (
            <SelectorOutlined
              autoWidth={false}
              defaultDisplayedValue={this.state.stage}
              valueList={getStages(
                this.state.country,
                this.state.brand,
                this.state.subBrand
              )}
            />
          )}
      </div>
    );
  }
}
