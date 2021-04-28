import React from 'react';
import Table from './Table';
import InputSelect from './InputSelect';
import GenreData from './GenreData';
import RatingData from './RatingData';

const TableList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Genre
                    <InputSelect
                            id="filter-genre"
                            options={GenreData}
                            onSelectChange={props.onFilterGenre}
                        />
                    </th>
                    <th>Rating
                    <InputSelect
                            id="filter-rating"
                            options={RatingData}
                            onSelectChange={props.onFilterRating}
                        />
                    </th>
                    <th><button className="refresh-button" onClick={() => window.location.reload(true)}>refresh page!</button></th>
                </tr>
            </thead>
            <Table
                items={props.list}
                onDelete={props.onSongDelete}
            />
        </table>
    )
}

export default TableList;