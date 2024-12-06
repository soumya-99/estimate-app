import { StyleSheet, View } from 'react-native'
import React from 'react'
import normalize, { SCREEN_WIDTH } from 'react-native-normalize'
import { usePaperColorScheme } from '../theme/theme'
import ButtonPaper from './ButtonPaper'
import { Badge, IconButton, Text } from 'react-native-paper'

type SnackBarProps = {
    totAmt: string
    cartItemQty?: number
    handleBtn1Press: () => void
    handleBtn2Press: () => void
    handleBtn3Press?: () => void
    disableNext?: boolean
    hideCart?: boolean
    disableCart?: boolean
}

const SnackBar = ({ handleBtn1Press, handleBtn2Press, handleBtn3Press, totAmt, cartItemQty, disableNext, hideCart = false, disableCart }: SnackBarProps) => {
    const theme = usePaperColorScheme()
    return (
        <View style={{
            flexDirection: "row",
            paddingHorizontal: normalize(20),
            alignSelf: "center",
            width: SCREEN_WIDTH / 1.1,
            height: normalize(60),
            backgroundColor: theme.colors.vanilla,
            borderRadius: normalize(20),
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Text variant="bodyLarge" style={{ color: theme.colors.onVanilla }}>Total • ₹{totAmt}</Text>

            {!hideCart && <View style={{
                marginLeft: "-5%"
            }}>
                <IconButton iconColor={theme.colors.onVanilla} icon="cart-variant" onPress={handleBtn3Press} disabled={disableCart} />
                <Badge visible={cartItemQty !== 0} style={{
                    position: "absolute",
                    top: 1,
                    right: 1,
                    backgroundColor: theme.colors.vanillaContainer,
                    color: theme.colors.onVanillaContainer,
                    fontWeight: "bold"
                }}>{cartItemQty}</Badge>
            </View>}

            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <ButtonPaper icon="arrow-right-thick" textColor={theme.colors.onVanilla} onPress={handleBtn1Press} mode="text" disabled={disableNext}>NEXT</ButtonPaper>
                <IconButton iconColor={theme.colors.onVanilla} icon="trash-can-outline" onPress={handleBtn2Press} />
            </View>
        </View>
    )
}

export default SnackBar

const styles = StyleSheet.create({})