import {Mutation, QL} from 'react-relay';

export default class CheckHidingSpotForTreasureMutation extends Mutation {
    static fragments = {
        game: () => QL`
          fragment on Game {
            id,
            turnsRemaining,
          }
        `,
        hidingSpot: () => QL`
          fragment on HidingSpot {
            id,
          }
        `,
    };
    getMutation() {
        return QL`mutation{checkHidingSpotForTreasure}`;
    }
    getCollisionKey() {
        return `check_${this.props.game.id}`;
    }
    getFatQuery() {
        return QL`
          fragment on CheckHidingSpotForTreasurePayload {
            hidingSpot {
              hasBeenChecked,
              hasTreasure,
            },
            game {
              turnsRemaining,
            },
          }
        `;
    }
    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                hidingSpot: this.props.hidingSpot.id,
                game: this.props.game.id,
            },
        }];
    }
    getVariables() {
        return {
            id: this.props.hidingSpot.id,
        };
    }
    getOptimisticResponse() {
        return {
            game: {
                turnsRemaining: this.props.game.turnsRemaining - 1,
            },
            hidingSpot: {
                id: this.props.hidingSpot.id,
                hasBeenChecked: true,
            },
        };
    }
}