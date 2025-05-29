// Projects相关数据（包括featuredProject和allProject）
// 如需修改，请仔细注意如下数据格式：
// featuredProject格式：
// {
//     imgPath: project_echolight, // 此处为import引入的图片
//     title: '论文题目',
//     publication: '会议名称',
//     year: 2024, // 发表年份
//     simplifiedAbstract: '精简摘要',
//     detailedAbstract: '详细摘要',
//     link: '点击论文题目 或 more按钮，进入的链接',
//     authors: 'xx x, xx x, and xx x',
// }
//
// allProject格式：
// {
//     title: '论文题目',
//     publication: '会议名称',
//     year: 2024,
//     authors: 'xx x, xx x, and xx x',
//     // optionButton为后面的按钮，允许不设置按钮
//     optionButton: [
//         {
//             label: 'label名称',
//             link: '跳转链接',
//         }, {
//             label: 'label名称',
//             link: '跳转链接',
//         }
//     ]
// }
// 
// 在上述数据格式中，如果不需要设置某些数据（如：publication、year、link等），允许不设置

// 引入所需的图片
import project_echolight from '@/assets/img/project-echolight.jpg'
import project_dolphin from '@/assets/img/project-dolphin.gif'
import project_LaserAdv from '@/assets/img/project-LaserAdv.jpg'
import project_UltraComm from '@/assets/img/project-UltraComm.jpg'
import project_earArray from '@/assets/img/project-earArray.jpg'

// featuredProjectList会全部展示在首页面
export const featuredProjectList = [
    {
        imgPath: project_echolight,
        title: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection Light Reflection Light Reflection',
        publication: 'INFOCOM',
        year: 2024,
        // 精简摘要
        simplifiedAbstract: 'EchoLight is a novel, non-intrusive method for long-range sound eavesdropping using ambient light reflections from vibrating objects. It employs an cGAN-based algorithm to correct audio distortions and spectral issues. Validated in diverse real-world settings, EchoLight reconstructs audio accurately over various distances, sound levels, and reflective surfaces. Results demonstrate high fidelity up to 40 meters, highlighting its effectiveness and broad applicability.',
        // 详细摘要
        detailedAbstract: 'Sound eavesdropping using light has been an area of considerable interest and concern, as it can be achieved over long distances. However, previous work has often lacked stealth (e.g., active emission of laser beams) or been limited in the range of realistic applications (e.g., using direct light from a device’s indicator LED or a hanging light bulb). In this paper, we present EchoLight, a non-intrusive, passive and long-range sound eavesdropping method that utilizes the extensive reflection of ambient light from vibrating objects to reconstruct sound. We analyze the relationship between reflection light signals and sound signals, particularly in situations where the frequency response of reflective objects and the efficiency of diffuse reflection are suboptimal. Based on this analysis, we have introduced an algorithm based on cGAN to address the issues of nonlinear distortion and spectral absence in the frequency domain of sound. We extensively evaluate EchoLight’s performance in a variety of real-world scenarios. It demonstrates the ability to accurately reconstruct audio from a variety of source distances, attack distances, sound levels, light intensity, light sources, and reflective materials. Our results reveal that the reconstructed audio exhibits a high degree of similarity to the original audio over 40 meters of attack distance.',
        link: 'https://ieeexplore.ieee.org/document/10621338',
        authors: 'Guoming Zhang, Zhijie Xiang, Heqiang Fu, Yanni Yang, and Pengfei Hu',
    }, {
        imgPath: project_dolphin,
        title: 'DolphinAttack: Inaudible Voice Commands',
        publication: 'CCS',
        year: 2017,
        // 精简摘要
        simplifiedAbstract: 'DolphinAttack exploits sound vulnerabilities in device voice assistants, using ultrasonic frequencies to covertly trigger commands without user awareness or interaction.',
        // 详细摘要
        detailedAbstract: 'Speech recognition (SR) systems such as Siri or Google Now have become an increasingly popular human-computer interaction method, and have turned various systems into voice controllable systems (VCS). Prior work on attacking VCS shows that the hidden voice commands that are incomprehensible to people can control the systems. Hidden voice commands, though "hidden", are nonetheless audible. In this work, we design a totally inaudible attack, DolphinAttack, that modulates voice commands on ultrasonic carriers (e.g., f > 20 kHz) to achieve inaudibility. By leveraging the nonlinearity of the microphone circuits, the modulated low-frequency audio commands can be successfully demodulated, recovered, and more importantly interpreted by the speech recognition systems. We validated DolphinAttack on popular speech recognition systems, including Siri, Google Now, Samsung S Voice, Huawei HiVoice, Cortana and Alexa. By injecting a sequence of inaudible voice commands, we show a few proof-of-concept attacks, which include activating Siri to initiate a FaceTime call on iPhone, activating Google Now to switch the phone to the airplane mode, and even manipulating the navigation system in an Audi automobile. We propose hardware and software defense solutions, and suggest to re-design voice controllable systems to be resilient to inaudible voice command attacks.',
        link: 'https://dl.acm.org/doi/10.1145/3133956.3134052',
        authors: 'Guoming Zhang, Chen Yan, Xiaoyu Ji, Tianchen Zhang, Taimin Zhang, and Wenyuan Xu',
    }, {
        imgPath: project_LaserAdv,
        title: 'LaserAdv: Laser Adversarial Attacks on Speech Recognition Systems',
        publication: 'USENIX Security',
        year: 2024,
        // 精简摘要
        simplifiedAbstract: 'LaserAdv uses lasers for adversarial attacks on ASR systems, achieving inaudible, long-range perturbations with high efficiency and accuracy, overcoming limitations of audio-based methods.',
        // 详细摘要
        detailedAbstract: 'Audio adversarial perturbations are imperceptible to humans but can mislead machine learning models, posing a security threat to automatic speech recognition (ASR) systems. Existing methods aim to minimize perturbation values, use acoustic masking, or mimic environmental sounds to render them undetectable. However, these perturbations, being audible frequency range sounds, are still audibly detectable. The slow propagation and rapid attenuation of sound limit their temporal sensitivity and attack range. In this study, we propose LaserAdv, a method that employs lasers to launch adversarial attacks, thereby overcoming the aforementioned challenges due to the superior properties of lasers. In the presence of victim speech, laser adversarial perturbations are superimposed on the speech rather than simply drowning it out, so LaserAdv has higher attack efficiency and longer attack range than LightCommands. LaserAdv introduces a selective amplitude enhancement method based on time-frequency interconversion (SAE-TFI) to deal with distortion. Meanwhile, to simultaneously achieve inaudible, targeted, universal, synchronizationfree (over 0.5 s), long-range, and black-box attacks in the physical world, we introduced a series of strategies into the objective function. Our experimental results show that a single perturbation can cause DeepSpeech, Whisper and iFlytek, to misinterpret any of the 12,260 voice commands as the target command with accuracy of up to 100%, 92% and 88%, respectively. The attack distance can be up to 120 m.',
        link: 'https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-guoming',
        authors: 'Guoming Zhang, Xiaohui Ma, Huiting Zhang, Yanni Yang, Xiaoyu Ji, Xiuzhen Cheng, and Pengfei Hu',
    }, {
        imgPath: project_UltraComm,
        title: 'Ultrasound Communication Using the Nonlinearity Effect of Microphone Circuits in Smart Devices',
        publication: 'TOSN',
        year: 2023,
        // 精简摘要
        simplifiedAbstract: 'UltraComm leverages microphone nonlinearity to enable high-speed, inaudible acoustic communication by modulating audible signals onto ultrasonic bands, achieving up to 16.24 kbps throughput on mobile devices using a custom OFDM scheme.',
        // 详细摘要
        detailedAbstract: 'Acoustic communication has become a research focus without requiring extra hardware and facilitates numerous near-field applications such as mobile payment. To communicate, existing researchers use either an audible frequency band or an inaudible one. The former gains a high throughput but endures being audible, which can be annoying to users. The latter, although inaudible, falls short in throughput due to the available (near) ultrasonic bandwidth. In this article, we achieve both high speed and inaudibility for acoustic communication by utilizing the nonlinearity effect on microphones. We theoretically prove the maximum throughput of inaudible acoustic communication by modulating an audible signal onto an ultrasonic band. Then, we design and implement UltraComm, which utilizes a specially designed OFDM scheme. The scheme takes into account the characteristics of the nonlinear speaker-to-microphone channel, aiming to mitigate the effects of signal distortion. We evaluate UltraComm on different mobile devices and achieve throughput as high as 16.24 kbps.',
        link: 'https://dl.acm.org/doi/full/10.1145/3631120',
        authors: 'Guoming Zhang, Xiaoyu Ji, Xinyan Zhou, Donglian Qi, and Wenyuan Xu',
    }, {
        imgPath: project_earArray,
        title: 'EarArray: Defending against Dolphinattacks via Acoustic Attenuation',
        publication: 'NDSS',
        year: 2021,
        // 精简摘要
        simplifiedAbstract: 'EarArray detects and localizes DolphinAttacks by analyzing attenuation rates of ultrasonic commands through existing multiple microphones on smart devices, achieving 99% detection and 97.89% direction accuracy without hardware changes.',
        // 详细摘要
        detailedAbstract: 'DolphinAttacks (i.e., inaudible voice commands) modulate audible voices over ultrasounds to inject malicious commands silently into voice assistants and manipulate controlled systems (e.g., doors or smart speakers). Eliminating DolphinAttacks is challenging if ever possible since it requires to modify the microphone hardware. In this paper, we design EarArray, a lightweight method that can not only detect such attacks but also identify the direction of attackers without requiring any extra hardware or hardware modification. Essentially, inaudible voice commands are modulated on ultrasounds that inherently attenuate faster than the one of audible sounds. By inspecting the command sound signals via the built-in multiple microphones on smart devices, EarArray is able to estimate the attenuation rate and thus detect the attacks. We propose a model of the propagation of audible sounds and ultrasounds from the sound source to a voice assistant, e.g., a smart speaker, and illustrate the underlying principle and its feasibility. We implemented EarArray using two specially-designed microphone arrays and our experiments show that EarArray can detect inaudible voice commands with an accuracy of 99% and recognize the direction of the attackers with an accuracy of 97.89%.',
        link: 'https://www.ndss-symposium.org/ndss-paper/eararray-defending-against-dolphinattack-via-acoustic-attenuation/',
        authors: 'Guoming Zhang, Xiaoyu Ji, Xinfeng Li, Gang Qu, Wenyuan Xu',
    },
]

export const allProjectList = [
    {
        title: 'Laser Adversarial Attacks on Speech Recognition Systems',
        publication: 'USENIX Security ',
        year: 2024,
        authors: 'Guoming Zhang, Xiaohui Ma, Huiting Zhang, Yanni Yang, Xiaoyu Ji, Xiuzhen Cheng, Pengfei Hu',
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            }, {
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    }, {
        title: 'EchoLight: Sound Eavesdropping based on Ambient Light Reflection Light Reflection Light Reflection',
        publication: 'INFOCOM',
        year: 2024,
        authors: 'Guoming Zhang, Zhijie Xiang, Heqiang Fu, Yanni Yang, and Pengfei Hu',
    }, {
        title: 'RF-Parrot: Wireless Eavesdropping on Wired Audio',
        publication: 'INFOCOM',
        year: 2024,
        authors: 'Yanni Yang, Genglin Wang, Zhenlin An, Pengfei Hu, Xiuzhen Cheng, Guoming Zhang',
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            }, {
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    }, {
        title: 'Jump out of Resonance: A Practical NFC Tag Fingerprinting Scheme',
        publication: 'TMC',
        year: 2023,
        authors: 'Yang, Yanni; An, Zhenlin; Cao, Jiannong; Wang, Yanwen; Hu, Pengfei; Zhang, Guoming; Cheng, Xiuzhen',
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            }, {
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        title: 'Ultrasound Communication Using the Nonlinearity Effect of Microphone Circuits in Smart Devices',
        publication: 'TOSN',
        year: 2023,
        authors: 'Guoming Zhang, Xiaoyu Ji, Xinyan Zhou, Donglian Qi, Wenyuan Xu',
    },{
        title: 'Model Poisoning Attack on Neural Network without Reference Data',
        publication: 'IEEE Transactions on Computers (TC)',
        year: 2023,
        authors: 'Xianglong Zhang, Huanle Zhang, Guoming Zhang, Hong Li, Dongxiao Yu, Xiuzhen Cheng, Pengfei Hu',
    },{
        title: 'Detecting Inaudible Voice Commands via Acoustic Attenuation by Multi-channel Microphones',
        publication: 'TDSC',
        year: 2023,
        authors: 'Xiaoyu Ji, Guoming Zhang, Xinfeng Li, Gang Qu, Xiuzhen Cheng, Wenyuan Xu',
    },{
        title: 'NFChain: A Practical Fingerprinting Scheme for NFC Tag Authentication',
        publication: 'INFOCOM',
        year: 2023,
        authors: 'Yanni Yang, Jiannong Cao, Zhenlin An, Yanwen Wang, Pengfei Hu, Guoming Zhang',
    },{
        title: 'AccEar: Accelerometer Acoustic Eavesdropping with Unconstrained Vocabulary',
        publication: 'IEEE Symposium on Security and Privacy (S&P)',
        year: 2022,
        authors: 'Pengfei Hu, Hui Zhuang, Panneer Selvam Santhalingam, Riccardo Spolaor, Parth Pathak, Guoming Zhang, Xiuzhen Cheng',
        optionButton: [
            {
                label: 'PDF',
                link: 'https://www.baidu.com',
            }, {
                label: 'WebSite',
                link: 'https://www.baidu.com',
            }
        ]
    },{
        title: 'EarArray: Defending against Dolphinattacks via Acoustic Attenuation',
        publication: 'NDSS',
        year: 2021,
        authors: 'Guoming Zhang, Xiaoyu Ji, Xinfeng Li, Gang Qu, Wenyuan Xu',
    },{
        title: 'DolphinAttack: Inaudible Voice Commands',
        publication: 'CCS',
        year: 2017,
        authors: 'Guoming Zhang, Chen Yan, Xiaoyu Ji, Tianchen Zhang, Taimin Zhang, Wenyuan Xu',
    },{
        title: 'UltraComm: High-speed and Inaudible Acoustic Communication',
        publication: 'Qshine',
        year: 2019,
        authors: 'Guoming Zhang, Xiaoyu Ji, Xinyan Zhou, Donglian Qi, Wenyuan Xu',
    },{
        title: 'Towards Unconstrained Vocabulary Eavesdropping with mmWave Radar using GAN',
        publication: 'TMC',
        year: 2022,
        authors: 'Pengfei Hu, Wenhao Li, Yifan Ma, Panneer Selvam Santhalingam, Parth Pathak, Hong Li, Huanle Zhang*, Guoming Zhang*, Xiuzhen Cheng, Prasant Mohapatra',
    },
]