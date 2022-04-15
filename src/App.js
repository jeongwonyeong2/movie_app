import React from 'react';

class App extends React.Component {
    state = {
        isLoading : true,
				movies: [],
    };
    componentDidMount() {
        // 영화 데이터 로딩!
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 5000);
    }
    render() {
        const { isLoading } = this.state;
        // We are ready 부분에 영화 데이터를 출력
        return <div> {isLoading ? '로딩중....' : '로딩완료'} </div>;
    }
}

export default App;