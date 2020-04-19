import styled from 'styled-components'

export const ListContainer = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    .sub-data {
      display: flex;
      justify-content: space-between;
      background-color: #f0f0f0;
        margin-top: 45px;
        padding: 10px 10px;
    }
    .ant-list-item-meta-avatar {
      align-self: center;
    }
    .total {
      color: rgba(0,0,0,0.45);
    }
    .monthly-expense {
        font-size: 20px;
    }
    .showing-expense {
        font-size: 20px;
        font-weight: bold;
    }
    }
`

export const SubDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .created-at {
        color: rgba(0, 0, 0, 0.45);
    }
`
