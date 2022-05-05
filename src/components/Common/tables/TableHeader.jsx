import React, {useId} from 'react';

const TableHeader = ({headers, ...rest}) => (
    <thead {...rest}>
        <tr>
            {
                headers.map((header => (
                    <th key={useId()}>
                        {header}
                    </th>
                )))
            }
        </tr>
    </thead>
);

export default TableHeader;