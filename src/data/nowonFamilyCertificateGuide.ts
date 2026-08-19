import { DocumentGuide } from '../types/guide';

export const nowonFamilyCertificateGuide: DocumentGuide = {
  id: 'nowon-family-certificate',
  districtId: 'nowon',
  documentName: '가족관계증명서',
  description: '촬영 당시 노원구청에 설치된 무인민원발급기를 기준으로 안내합니다.',
  versionDescription: '2023년 기준 소프트웨어 버전',
  preparationItems: [
    '이 안내는 본인이 가족관계증명서를 발급하는 상황을 기준으로 합니다.',
    '실제 발급기에서 본인의 주민등록번호를 입력합니다.',
    '본인 확인을 위해 오른쪽 엄지손가락의 지문 인식이 필요합니다.',
    '제출 기관에서 일반증명서, 상세증명서, 특정증명서 중 무엇을 요구하는지 확인하세요.',
    '주민등록번호 뒷자리를 포함해야 하는지 제출 기관에 확인하세요.',
    '필요한 발급 부수를 확인하세요.',
    '촬영된 기기에서는 수수료가 무료로 표시되었지만 실제 이용 시 화면에 표시되는 금액을 다시 확인하세요.',
    '앱에는 주민등록번호를 입력하지 마세요.',
    '주변 사람이 실제 발급기 화면의 개인정보를 보지 않도록 주의하세요.'
  ],
  steps: [
    {
      id: 'step-1',
      order: 1,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/001.png',
      title: '가족관계등록부를 눌러 주세요',
      description: '여러 증명서 메뉴 중 화면 가운데 두 번째 줄에 있는 ‘가족관계등록부’를 눌러 주세요.\n\n화면이 꺼져 있다면 먼저 화면 가운데를 가볍게 눌러 시작 화면을 확인하세요.',
      voiceText: '화면 가운데 두 번째 줄에 있는 가족관계등록부 버튼을 눌러 주세요. 화면이 꺼져 있다면 먼저 화면 가운데를 가볍게 눌러 시작 화면을 확인하세요.',
      targetAreas: [
        {
          id: 'btn-family-registry',
          label: '가족관계등록부',
          x: 0.28,
          y: 0.17,
          width: 0.2,
          height: 0.1,
          shape: 'rect'
        }
      ],
      nextStepId: 'step-2'
    },
    {
      id: 'step-2',
      order: 2,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/002.png',
      title: '가족관계증명서를 선택하세요',
      description: '왼쪽 위에 있는 ‘가족관계증명서’를 눌러 주세요.',
      voiceText: '왼쪽 위에 있는 가족관계증명서를 눌러 주세요. 기본증명서, 혼인관계증명서, 폐쇄 가족관계증명서와 혼동하지 않도록 이름을 확인하세요.',
      cautionText: '기본증명서, 혼인관계증명서, 폐쇄 가족관계증명서와 혼동하지 않도록 이름을 확인하세요.',
      targetAreas: [
        {
          id: 'btn-family-cert',
          label: '가족관계증명서',
          x: 0.14,
          y: 0.19,
          width: 0.32,
          height: 0.13,
          shape: 'rect'
        }
      ],
      previousStepId: 'step-1',
      nextStepId: 'step-3'
    },
    {
      id: 'step-3',
      order: 3,
      type: 'decision',
      imagePath: '/assets/nowon/family-certificate/003.png',
      title: '발급 안내를 확인하세요',
      description: '가족관계증명서에 표시되는 가족 범위에 관한 안내입니다. 내용을 읽은 뒤 오른쪽 아래의 ‘확인’을 눌러 주세요.\n\n사진 속 안내에 따르면 신청인 본인을 기준으로 부모, 배우자, 자녀에 관한 인적사항이 표시됩니다.',
      voiceText: '가족관계증명서에 표시되는 가족 범위에 관한 안내입니다. 내용을 읽은 뒤 오른쪽 아래에 있는 파란색 확인 버튼을 눌러 주세요.',
      cautionText: '형제나 자매와의 관계를 증명하려는 경우에는 필요한 서류가 다를 수 있으므로 제출 기관 또는 담당 직원에게 확인하세요.',
      targetAreas: [
        {
          id: 'btn-confirm-guide',
          label: '확인',
          x: 0.80,
          y: 0.77,
          width: 0.12,
          height: 0.12,
          shape: 'circle'
        }
      ],
      previousStepId: 'step-2',
      nextStepId: 'step-4'
    },
    {
      id: 'step-4',
      order: 4,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/004.png',
      title: '주민등록번호를 입력하세요',
      description: '실제 발급기의 숫자 버튼으로 본인의 주민등록번호를 입력한 뒤 오른쪽 아래의 ‘확인’을 눌러 주세요.',
      voiceText: '실제 발급기의 숫자 버튼으로 본인의 주민등록번호를 입력한 뒤 오른쪽 아래에 있는 파란색 확인 버튼을 눌러 주세요. 앱에는 입력하지 마세요.',
      cautionText: '주민등록번호는 실제 발급기에만 입력하세요. 이 앱에는 입력하지 마세요. 뒤에 있는 사람이 번호를 보지 않도록 화면을 가려 주세요.',
      targetAreas: [
        {
          id: 'keypad',
          label: '숫자 키패드',
          x: 0.525,
          y: 0.272,
          width: 0.425,
          height: 0.39,
          shape: 'rect'
        },
        {
          id: 'btn-confirm-jumin',
          label: '확인',
          x: 0.795,
          y: 0.73,
          width: 0.13,
          height: 0.13,
          shape: 'circle'
        }
      ],
      previousStepId: 'step-3',
      nextStepId: 'step-5'
    },
    {
      id: 'step-5',
      order: 5,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/005.png',
      title: '오른쪽 엄지손가락을 올려 주세요',
      description: '기계 아래 오른쪽에 있는 지문인식기에 오른쪽 엄지손가락을 올려 주세요.\n\n손가락의 지문 가운데가 인식기 중앙에 닿도록 하고 움직이지 말고 기다려 주세요.',
      voiceText: '기계 아래 오른쪽에 있는 지문인식기에 오른쪽 엄지손가락을 올려 주세요. 손가락의 지문 가운데가 인식기 중앙에 닿도록 하고 움직이지 말고 기다려 주세요.',
      targetAreas: [
        {
          id: 'fingerprint-scanner',
          label: '실제 지문인식기 위치',
          x: 0.77,
          y: 0.825,
          width: 0.11,
          height: 0.165,
          shape: 'rect'
        }
      ],
      helpActions: ['지문이 인식되지 않아요'],
      previousStepId: 'step-4',
      nextStepId: 'step-6'
    },
    {
      id: 'step-6',
      order: 6,
      type: 'status',
      imagePath: '/assets/nowon/family-certificate/006.png',
      title: '본인 확인이 끝날 때까지 기다려 주세요',
      description: '‘본인 확인을 마쳤습니다’라는 화면이 보이면 다음 화면이 나타날 때까지 기다려 주세요.',
      voiceText: '본인 확인을 마쳤습니다 라는 화면이 보이면 다음 화면이 나타날 때까지 기다려 주세요. 화면을 누르지 마세요.',
      cautionText: '현재 단계에서 발급기 화면을 누르지 마세요.',
      previousStepId: 'step-5',
      nextStepId: 'step-7'
    },
    {
      id: 'step-7',
      order: 7,
      type: 'decision',
      imagePath: '/assets/nowon/family-certificate/007.png',
      title: '제출 기관이 요구한 서류를 확인하세요',
      description: '관공서, 회사, 은행 등 서류를 제출할 곳에서 어떤 종류의 가족관계증명서를 요구했는지 미리 확인하세요.\n\n내용을 확인한 뒤 오른쪽 아래의 ‘확인’을 눌러 주세요.',
      voiceText: '제출 기관이 요구한 증명서 종류를 미리 확인하라는 안내입니다. 내용을 확인한 뒤 오른쪽 아래에 있는 파란색 확인 버튼을 눌러 주세요.',
      cautionText: '화면에 개인정보가 표시될 수 있으므로 주변을 확인하세요.',
      targetAreas: [
        {
          id: 'btn-confirm-type',
          label: '확인',
          x: 0.80,
          y: 0.80,
          width: 0.12,
          height: 0.12,
          shape: 'circle'
        }
      ],
      previousStepId: 'step-6',
      nextStepId: 'step-8'
    },
    {
      id: 'step-8',
      order: 8,
      type: 'decision',
      imagePath: '/assets/nowon/family-certificate/008.png',
      title: '필요한 증명서 종류를 선택하세요',
      description: '제출 기관에서 요구한 종류에 맞게 일반증명서, 상세증명서 또는 특정증명서를 선택하세요.',
      voiceText: '제출 기관에서 요구한 종류에 맞게 일반증명서, 상세증명서 또는 특정증명서를 선택하세요. 필요한 종류를 모르겠다면 서류를 요구한 기관에 확인하세요.',
      cautionText: '필요한 종류를 모르겠다면 임의로 선택하지 말고 서류를 요구한 기관에 확인하세요.',
      targetAreas: [
        {
          id: 'btn-general',
          label: '일반증명서',
          x: 0.67,
          y: 0.24,
          width: 0.22,
          height: 0.11,
          shape: 'rect'
        },
        {
          id: 'btn-detailed',
          label: '상세증명서',
          x: 0.67,
          y: 0.39,
          width: 0.22,
          height: 0.11,
          shape: 'rect'
        },
        {
          id: 'btn-specific',
          label: '특정증명서',
          x: 0.67,
          y: 0.54,
          width: 0.22,
          height: 0.11,
          shape: 'rect'
        }
      ],
      previousStepId: 'step-7',
      nextStepId: 'step-9'
    },
    {
      id: 'step-9',
      order: 9,
      type: 'decision',
      imagePath: '/assets/nowon/family-certificate/009.png',
      title: '주민등록번호 뒷자리 표시 여부를 선택하세요',
      description: '서류에 주민등록번호 뒷자리까지 보이게 하려면 ‘포함’을, 별표로 가리려면 ‘미포함’을 눌러 주세요.',
      voiceText: '서류에 주민등록번호 뒷자리까지 보이게 하려면 왼쪽의 포함을, 별표로 가리려면 오른쪽의 미포함을 눌러 주세요.',
      cautionText: '제출 기관에서 요구한 방식에 따라 선택해야 합니다. 잘 모르겠다면 제출 기관에 확인하세요.',
      targetAreas: [
        {
          id: 'btn-include',
          label: '포함',
          x: 0.13,
          y: 0.34,
          width: 0.31,
          height: 0.16,
          shape: 'rect'
        },
        {
          id: 'btn-exclude',
          label: '미포함',
          x: 0.54,
          y: 0.34,
          width: 0.31,
          height: 0.16,
          shape: 'rect'
        }
      ],
      previousStepId: 'step-8',
      nextStepId: 'step-10'
    },
    {
      id: 'step-10',
      order: 10,
      type: 'status',
      imagePath: '/assets/nowon/family-certificate/010.png',
      title: '자료를 불러오는 동안 기다려 주세요',
      description: '‘자료를 수신 중입니다’ 또는 ‘준비 중’이라는 화면이 보이면 발급기 화면을 누르지 말고 기다려 주세요.',
      voiceText: '자료를 수신 중입니다 라는 화면이 보이면 발급기 화면을 누르지 말고 기다려 주세요.',
      previousStepId: 'step-9',
      nextStepId: 'step-11'
    },
    {
      id: 'step-11',
      order: 11,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/011.png',
      title: '발급할 장수를 선택하세요',
      description: '오른쪽 숫자 버튼으로 필요한 발급 부수를 입력하세요.\n\n왼쪽의 신청 증명서, 증명 구분, 주민등록번호 표시 여부와 수수료 내용을 함께 확인하세요.\n\n내용이 맞으면 오른쪽 아래의 ‘확인’을 눌러 주세요.',
      voiceText: '오른쪽 숫자 버튼으로 필요한 발급 부수를 입력하세요. 내용이 맞으면 오른쪽 아래에 있는 파란색 확인 버튼을 눌러 주세요.',
      cautionText: '사진에는 상세증명서, 주민등록번호 미공개, 1부로 표시되어 있지만 사용자가 실제로 선택한 내용과 다를 수 있습니다.',
      targetAreas: [
        {
          id: 'copy-input',
          label: '발급 부수 입력 영역',
          x: 0.57,
          y: 0.21,
          width: 0.28,
          height: 0.08,
          shape: 'rect'
        },
        {
          id: 'copy-keypad',
          label: '숫자 키패드',
          x: 0.557,
          y: 0.427,
          width: 0.332,
          height: 0.316,
          shape: 'rect'
        },
        {
          id: 'btn-confirm-copies',
          label: '확인',
          x: 0.80,
          y: 0.80,
          width: 0.12,
          height: 0.12,
          shape: 'circle'
        }
      ],
      previousStepId: 'step-10',
      nextStepId: 'step-12'
    },
    {
      id: 'step-12',
      order: 12,
      type: 'decision',
      imagePath: '/assets/nowon/family-certificate/012.png',
      title: '다른 서류가 필요하지 않으면 선택 완료를 눌러 주세요',
      description: '가족관계증명서만 발급하려면 오른쪽의 ‘선택 완료’를 눌러 주세요.\n\n다른 증명서를 함께 발급해야 한다면 왼쪽의 ‘증명서 추가’를 선택할 수 있습니다.',
      voiceText: '가족관계증명서만 발급하려면 오른쪽에 있는 선택 완료를 눌러 주세요.',
      cautionText: '증명서 추가를 선택하면 사진에 없는 별도의 발급 과정이 이어질 수 있습니다.',
      targetAreas: [
        {
          id: 'btn-finish-selection',
          label: '선택 완료',
          x: 0.54,
          y: 0.21,
          width: 0.32,
          height: 0.23,
          shape: 'rect'
        }
      ],
      previousStepId: 'step-11',
      nextStepId: 'step-13'
    },
    {
      id: 'step-13',
      order: 13,
      type: 'action',
      imagePath: '/assets/nowon/family-certificate/013.png',
      title: '신청 내용을 확인하고 발급을 눌러 주세요',
      description: '신청 증명서, 신청 부수와 화면에 표시된 금액을 확인하세요.\n\n내용이 맞으면 오른쪽 아래의 파란색 ‘발급’ 버튼을 눌러 주세요.',
      voiceText: '신청 증명서, 신청 부수와 화면에 표시된 금액을 확인하세요. 내용이 맞으면 오른쪽 아래에 있는 파란색 발급 버튼을 눌러 주세요.',
      cautionText: '다른 기기나 운영 시점에는 수수료가 다를 수 있으므로 실제 화면에 표시되는 금액을 확인하세요.',
      targetAreas: [
        {
          id: 'btn-issue',
          label: '발급',
          x: 0.80,
          y: 0.82,
          width: 0.12,
          height: 0.12,
          shape: 'circle'
        }
      ],
      previousStepId: 'step-12',
      nextStepId: 'step-14'
    },
    {
      id: 'step-14',
      order: 14,
      type: 'completion',
      title: '서류가 나올 때까지 기다려 주세요',
      description: '발급 버튼을 누른 뒤 기계가 서류를 출력할 때까지 기다려 주세요.\n\n출력구에서 가족관계증명서를 꺼내고 신청한 내용이 맞는지 확인하세요.',
      voiceText: '발급 버튼을 누른 뒤 기계가 서류를 출력할 때까지 기다려 주세요. 출력구에서 가족관계증명서를 꺼내고 신청한 내용이 맞는지 확인하세요.',
      previousStepId: 'step-13'
    }
  ]
};
