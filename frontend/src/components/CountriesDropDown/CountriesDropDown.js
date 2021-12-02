import { useMemo } from 'react';
import countryList from 'react-select-country-list';
import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const CountriesDropDown = (props) => {
  const countries = useMemo(() => countryList().getData(), []);

  return (
    <Listbox value={props.value} onChange={props.onChange}>
      <Listbox.Button className="text-center bg-tbgreen-default placeholder-white placeholder-opacity-60 h-9 w-full hover:bg-tbgreen-hover focus:bg-tbgreen-hover focus:outline-none focus:placeholder-transparent">
        <span className=" text-center ml-7">{props.value.label}</span>
        <SelectorIcon
          className=" h-5 w-5 float-right mr-2 text-gray-300"
          aria-hidden="true"
        />
      </Listbox.Button>

      <Listbox.Options className=" z-50 mt-1 w-full max-h-48 bg-btngreen-dark text-offwhite overflow-auto">
        {countries.map((country) => (
          <Listbox.Option
            key={country.label}
            className={({ active }) =>
              classNames(
                active ? 'text-white bg-tbgreen-hover' : 'text-offwhite',
                'select-none relative py-2 pl-3 pr-9'
              )
            }
            value={country}
          >
            {({ selected, active }) => (
              <>
                <div className="flex items-center">
                  <span
                    className={classNames(
                      selected ? 'font-bold' : 'font-normal',
                      'ml-3 block truncate'
                    )}
                  >
                    {country.label}
                  </span>
                </div>

                {selected ? (
                  <span
                    className={classNames(
                      active ? 'text-white' : 'text-indigo-600',
                      'absolute inset-y-0 right-0 flex items-center pr-4'
                    )}
                  >
                    <CheckIcon
                      className="h-5 w-5 text-offwhite"
                      aria-hidden="true"
                    />
                  </span>
                ) : null}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CountriesDropDown;
