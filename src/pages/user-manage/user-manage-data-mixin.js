export default {
  data () {
    return {
      userList: [
        {
          account: 'JY00000001',
          nickName: '陈陈',
          realName: '陈晨',
          cardId: '19950812',
          phone: '13388889999',
          mtLength: 2,
          mainMt: '123',
          accountStatus: true,
          mentionStatus: false,
          tradeStatus: false,
          promotStatus: true,
          superior: '11',
          openTime: '2017-01-01 10:00:00'
        },
        {
          account: 'JY00000002',
          nickName: '驱蚊器',
          realName: '陈2',
          cardId: '19950812',
          phone: '133888899100',
          mtLength: 2,
          mainMt: '123',
          accountStatus: true,
          mentionStatus: false,
          tradeStatus: false,
          promotStatus: true,
          superior: '112',
          openTime: '2017-01-01 10:00:00'
        },
        {
          account: 'JY00000001',
          nickName: '通天塔',
          realName: '陈3',
          cardId: '19950812',
          phone: '13388889999',
          mtLength: 2,
          mainMt: '123',
          accountStatus: true,
          mentionStatus: false,
          tradeStatus: false,
          promotStatus: true,
          superior: '11',
          openTime: '2017-01-01 10:00:00'
        }
      ],
      userAuditList: [
        {
          account: 'JY00000001',
          nickName: '陈陈',
          realName: '陈晨',
          cardId: '19950812',
          Documents: {
            type: '身份证',
            num: '123'
          },
          banks: {
            type: '招商银行',
            num: '123456'
          },
          requestTime: '2017-01-01 10:00:00',
          invitingPeople: 'zhou',
          auditStatus: '待审',
          auditNum: 1,
          processTime: '2017-01-01 10:00:00'
        },
        {
          account: 'JY00000001',
          nickName: '陈陈',
          realName: '陈晨',
          cardId: '19950812',
          Documents: {
            type: '身份证',
            num: '123'
          },
          banks: {
            type: '招商银行',
            num: '123456'
          },
          requestTime: '2017-01-01 10:00:00',
          invitingPeople: 'zhou',
          auditStatus: '已通过',
          auditNum: 1,
          processTime: '2017-01-01 10:00:00'
        },
        {
          account: 'JY00000001',
          nickName: '陈陈',
          realName: '陈晨',
          cardId: '19950812',
          Documents: {
            type: '身份证',
            num: '123'
          },
          banks: {
            type: '招商银行',
            num: '123456'
          },
          requestTime: '2017-01-01 10:00:00',
          invitingPeople: 'zhou',
          auditStatus: '已驳回',
          auditNum: 1,
          processTime: '2017-01-01 10:00:00'
        }
      ]
    };
  }
};